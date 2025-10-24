import { fetchAuthOdoo } from "@/utils/fetch-auth-odoo";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
  const odoo_api = process.env.ODOO_URL || "http://10.10.165.19:8888";

  try {
    const { slug_url_ome_etc } = await request.json();

    const response = await fetchAuthOdoo({
      api_url: `${odoo_api}/wp-ome-etc/get-product-by-slug`,
      method: "POST",
      form_data: { slug_url_ome_etc },
    });

    const data = await response.json();

    // ✅ Chỉ trả status 200 hoặc lỗi 400/500 để dễ kiểm tra
    if (response.ok) {
      return NextResponse.json({ success: true, data }, { status: 200 });
    } else {
      return NextResponse.json(
        { success: false, error: data },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Lỗi khi gọi API Odoo:", error);
    return NextResponse.json(
      { success: false, error: "Lỗi khi gọi API Odoo" },
      { status: 500 }
    );
  }
}
