// app/api/register/route.ts
import { NextResponse } from "next/server";
import { fetchAuthOdoo } from "@/utils/fetch-auth-odoo";

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

export async function POST(req: Request) {
  const odoo_api = process.env.ODOO_URL || "http://10.10.165.19:8888";

  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Thiếu thông tin cần thiết" },
        { status: 400 }
      );
    }

    const response = await fetchAuthOdoo({
      api_url: `${odoo_api}/user-core/register`,
      method: "POST",
      form_data: {
        name,
        email,
        password,
      },
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

// ✅ Nếu muốn chặn các method khác
export function GET() {
  return NextResponse.json(
    { error: "Chỉ hỗ trợ phương thức POST" },
    { status: 405 }
  );
}
