import { fetchAuthOdooPersonalToken } from "@/utils/fetch-auth-odoo";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
  const odoo_api = process.env.ODOO_URL || "http://10.10.165.19:8888";

  try {
    const { session_log_id, old_password, new_password } = await request.json();

    if (!old_password || !old_password || !session_log_id) {
      return Response.json({ error: "dữ liệu yêu cầu" }, { status: 400 });
    }

    const response = await fetchAuthOdooPersonalToken({
      api_url: `${odoo_api}/user-core/change_password`,
      method: "POST",
      personal_token: session_log_id,
      form_data: { old_password, new_password },
    });

    const data = await response.json();

    if (response.ok) {
      return NextResponse.json(data, { status: 200 });
    } else {
      return NextResponse.json(data, { status: 300 });
    }
  } catch (error) {
    console.error("Lỗi khi gọi API Odoo:", error);
    return NextResponse.json(
      { error: "Lỗi khi gọi API Odoo" },
      { status: 500 }
    );
  }
}
