import { fetchAuthOdoo } from "@/utils/fetch-auth-odoo";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
  const odoo_api = process.env.ODOO_URL || "http://10.10.165.19:8888";

  try {
    // Lấy slug từ query params ?slug=abc
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    if (!slug) {
      return NextResponse.json(
        { error: "Thiếu slug trong query params" },
        { status: 400 }
      );
    }

    const response = await fetchAuthOdoo({
      api_url: `${odoo_api}/ome-etc-teacher/teachers/${slug}`,
      method: "GET",
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: "Odoo API trả lỗi", data },
        { status: response.status }
      );
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Lỗi khi gọi API Odoo:", error);
    return NextResponse.json(
      { error: "Lỗi khi gọi API Odoo" },
      { status: 500 }
    );
  }
}
