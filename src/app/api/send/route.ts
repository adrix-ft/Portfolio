import { config } from "@/data/config";
import { z } from "zod";

const Email = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  message: z.string().min(10, "Message is too short!"),
});

import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      success: zodSuccess,
      data: zodData,
      error: zodError,
    } = Email.safeParse(body);
    
    if (!zodSuccess)
      return Response.json({ error: zodError?.message }, { status: 400 });

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [config.email],
      subject: `New Message from ${zodData.fullName}`,
      replyTo: zodData.email,
      react: EmailTemplate({
        fullName: zodData.fullName,
        email: zodData.email,
        message: zodData.message,
      }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ 
        success: false, 
        message: error.message 
      }, { status: 500 });
    }

    return Response.json({ 
      success: true, 
      message: "Email sent successfully" 
    });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
