import { fetchAuthOdoo } from "@/utils/fetch-auth-odoo";
import { NextResponse } from "next/server";
export async function GET(request: Request) {
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
  const odoo_api = process.env.ODOO_URL || "http://10.10.165.19:8888";

  try {
    const response = await fetchAuthOdoo({
      api_url: `${odoo_api}/wp-ome-etc/get-categories-hierarchical`,
      method: "POST",
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error("Lỗi khi gọi API Odoo:", error);
    return NextResponse.json(
      { error: "Lỗi khi gọi API Odoo" },
      { status: 500 }
    );
  }
}
