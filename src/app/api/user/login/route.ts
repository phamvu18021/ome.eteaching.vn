import { fetchAuthOdoo } from "@/utils/fetch-auth-odoo";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
  const odoo_api = process.env.ODOO_URL || "http://10.10.165.19:8888";

  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return Response.json({ error: "Thiếu email hoặc mật khẩu" }, { status: 400 });
    }

    const response = await fetchAuthOdoo({
      api_url: `${odoo_api}/user-core/login`,
      method: "POST",
      form_data: { email, password },
    });

    const data = await response.json();

    if (response.ok) {
      return NextResponse.json(data, { status: 200 });
    } else {
      return NextResponse.json(data, { status: 300 });
    }
  } catch (error) {
    console.error("Lỗi khi gọi API Odoo:", error);
    return NextResponse.json({ error: "Lỗi khi gọi API Odoo" }, { status: 500 });
  }
}
