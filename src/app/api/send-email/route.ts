// app/api/send-email/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Nếu bạn dùng TypeScript và bị lỗi kiểu, thêm dòng này vào global.d.ts:
// declare module "nodemailer";

export async function POST(req: Request) {
  try {
    const { to, subject, text, html } = await req.json();

    if (!to || !subject || (!text && !html)) {
      return NextResponse.json(
        { message: "Thiếu dữ liệu yêu cầu" },
        { status: 400 }
      );
    }

    // Tạo transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      ...(html ? { html } : { text }),
    };

    // Gửi email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email", error: String(error) },
      { status: 500 }
    );
  }
}
