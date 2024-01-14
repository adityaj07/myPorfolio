import { transport, mailOptions } from "@/app/config/nodemailer";
import { contactFormSchema } from "@/app/lib/types";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, name, message } = await req.json();

  const result = contactFormSchema.safeParse({email, name, message});
  console.log(result)

  if(!result.success) {
    return NextResponse.json({ message: result.error, success:false });
  }

  try {
    await transport.sendMail({
      ...mailOptions,
      subject: `Message from ${name} (${email})`,
      text: message,
    });

   
    return NextResponse.json({ message: 'Email sent', success:true }, {status: 200});
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Failed to send email', success:false }, { status: 500 });
  }
}
