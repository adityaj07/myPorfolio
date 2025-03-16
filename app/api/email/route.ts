import { mailOptions, transport } from "@/app/config/nodemailer";
import { contactFormSchema } from "@/app/lib/types";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, name, message } = await req.json();

    const result = contactFormSchema.safeParse({ email, name, message });

    if (!result.success) {
      return NextResponse.json({
        message: "Validation failed",
        errors: result.error.format(),
        success: false,
      });
    }

    try {
      await transport.sendMail({
        ...mailOptions,
        subject: `Portfolio Contact: Message from ${name} (${email})`,
        text: message,
        html: `
          <div>
            <h2>New message from your portfolio</h2>
            <p><strong>From:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
          </div>
        `,
      });

      return NextResponse.json({
        message: "Email sent successfully!",
        success: true,
      });
    } catch (emailError: any) {
      console.error("Email sending error:", emailError);

      return NextResponse.json(
        {
          message: `Failed to send email: ${
            emailError.message || "Unknown error"
          }`,
          success: false,
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error("Request processing error:", error);

    return NextResponse.json(
      {
        message: `Server error: ${error.message || "Unknown error"}`,
        success: false,
      },
      { status: 500 }
    );
  }
}
