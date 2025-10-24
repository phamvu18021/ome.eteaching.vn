import React from "react";
import { getClient } from "@/lib/apolloClient";
import { GET_TEACHER_INFO } from "@/app/api/graphQL/getTeacherInfo";
import TeacherInfo from "@/features/teacherInfo";
import { fetchAuthOdoo } from "@/utils/fetch-auth-odoo";

async function getTeacherInfoFromWp(slug: string) {
  try {
    const { data, errors } = await getClient().query({
      query: GET_TEACHER_INFO,
      variables: { id: slug },
    });

    if (errors || !data?.post) {
      return null;
    }

    return {
      teacherInfo: data?.post?.teacherInfo,
    };
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}
async function getTeacherInfoFromOdoo(slug: string) {
  try {
    const odoo_api = process.env.ODOO_URL || "http://10.10.165.19:8888";
    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

    const response = await fetchAuthOdoo({
      api_url: `${odoo_api}/ome-etc-teacher/teachers/${slug}`,
      method: "GET",
      form_data: { slug_url_ome_etc: slug },
    });

    const data = await response.json();
    return data?.success ? data?.data : {};
  } catch (error) {
    console.error("Error fetching product from Odoo:", error);
    return {};
  }
}
export default async function ProductInfoPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const [dataWP, dataOdoo] = await Promise.all([
    getTeacherInfoFromWp(slug),
    getTeacherInfoFromOdoo(slug),
  ]);
  return (
    <div className="bg-white min-h-screen">
      <TeacherInfo slug={slug} />
    </div>
  );
}
