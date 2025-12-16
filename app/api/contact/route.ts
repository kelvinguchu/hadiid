import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, inquiryType, message } = body;

    // Validate required fields
    if (!name || !email || !inquiryType || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const fromEmail = process.env.FROM_EMAIL ?? "info@hadiidindustries.com";
    const fromName = process.env.FROM_NAME ?? "Hadiid Industries Ltd Website";
    const toEmail = process.env.TO_EMAIL ?? "inquiries@hadiidindustries.com";

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: `${fromName} <${fromEmail}>`,
      to: [toEmail] as string[],
      replyTo: email,
      subject: `New ${inquiryType} Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1a1a1a; padding: 20px; text-align: center;">
            <h1 style="color: #ffc400; margin: 0;">HADIID Industries</h1>
            <p style="color: #ffffff; margin: 5px 0 0 0;">New Contact Form Submission</p>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9;">
            <h2 style="color: #1a1a1a; margin-top: 0;">Inquiry Details</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; width: 120px;">Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">
                  <a href="mailto:${email}" style="color: #ffc400;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Inquiry Type:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${inquiryType}</td>
              </tr>
            </table>
            
            <h3 style="color: #1a1a1a; margin-top: 25px;">Message:</h3>
            <div style="background: #ffffff; padding: 15px; border-radius: 5px; border-left: 4px solid #ffc400;">
              ${message.replaceAll("\n", "<br>")}
            </div>
          </div>
          
          <div style="background: #1a1a1a; padding: 15px; text-align: center;">
            <p style="color: #888; margin: 0; font-size: 12px;">
              This email was sent from the HADIID Industries website contact form.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Email sent successfully", id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
