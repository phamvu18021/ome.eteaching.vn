import { NextResponse } from "next/server";
import { fetchAuthOdoo } from "@/utils/fetch-auth-odoo";

const odoo_api = process.env.ODOO_URL || "http://10.10.165.19:8888";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Thiếu thông tin cần thiết" },
        { status: 400 }
      );
    }

    const response = await fetchAuthOdoo({
      api_url: `${odoo_api}/user-core/activate_account`,
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
    console.error("Error calling Odoo API:", error);
    return NextResponse.json(
      { error: "Lỗi khi gọi API Odoo" },
      { status: 500 }
    );
  }
}

export function GET() {
  return NextResponse.json(
    { error: "Chỉ hỗ trợ phương thức POST" },
    { status: 405 }
  );
}
