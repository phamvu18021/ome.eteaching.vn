import { fetchAuthOdooPersonalToken } from "@/utils/fetch-auth-odoo";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
  const odoo_api = process.env.ODOO_URL || "http://10.10.165.19:8888";

  try {
    const { email, age, phone, gender, career, session_log_id, name } =
      await request.json();

    if (!email || !session_log_id || !name) {
      return Response.json(
        { error: "Thiếu trường cần thiết " },
        { status: 400 }
      );
    }

    const response = await fetchAuthOdooPersonalToken({
      api_url: `${odoo_api}/user-core/update_user_info`,
      method: "POST",
      personal_token: session_log_id,
      form_data: { email, age: Number(age), phone, gender, career, name },
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
