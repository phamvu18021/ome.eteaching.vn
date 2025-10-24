/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ProductDetailPage from "@/features/productInfo";
import { getClient } from "@/lib/apolloClient";
import { GET_PRODUCT_INFO } from "@/app/api/graphQL/getProductInfo";
import { fetchAuthOdoo } from "@/utils/fetch-auth-odoo";

async function getPost(slug: string) {
  try {
    const { data, errors } = await getClient().query({
      query: GET_PRODUCT_INFO,
      variables: { id: slug },
    });

    if (errors || !data?.post) return null;

    return {
      productInfo: data?.post?.productInfo,
    };
  } catch (error) {
    console.error("Error fetching WP post:", error);
    return null;
  }
}

async function getProductFromOdoo(slug: string) {
  try {
    const odoo_api = process.env.ODOO_URL || "http://10.10.165.19:8888";
    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

    const response = await fetchAuthOdoo({
      api_url: `${odoo_api}/wp-ome-etc/get-product-by-slug`,
      method: "POST",
      form_data: { slug_url_ome_etc: slug },
    });

    const data = await response.json();
    return data?.success ? data?.data : {};
  } catch (error) {
    console.error("Error fetching product from Odoo:", error);
    return {};
  }
}

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;

  const [dataWP, dataOdoo] = await Promise.all([
    getPost(slug),
    getProductFromOdoo(slug),
  ]);

  return (
    <div className="bg-white min-h-screen">
      <ProductDetailPage dataWP={dataWP} dataOdoo={dataOdoo} />
    </div>
  );
}
