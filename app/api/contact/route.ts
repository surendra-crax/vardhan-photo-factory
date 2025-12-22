import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    console.log("CONTACT API HIT");

    // Parse request body
    const body = await req.json();
    console.log("REQUEST BODY:", body);

    const { name, email, phone, message } = body;

    // Basic validation
    if (!name || !email || !phone || !message) {
      console.log("VALIDATION FAILED");
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check API key
    console.log(
      "RESEND KEY LOADED:",
      process.env.RESEND_API_KEY ? "YES" : "NO"
    );

    // Send email
    const result = await resend.emails.send({
      from: "Shoot Booking <onboarding@resend.dev>", // DO NOT CHANGE
      to: ["surendrabandaru09@gmail.com"],
      subject: "New Shoot Booking Request",
      html: emailTemplate({ name, email, phone, message }),
    });

    console.log("RESEND RESPONSE:", result);

    return Response.json({ success: true });
  } catch (error: any) {
    console.error("EMAIL ERROR:", error);

    return Response.json(
      {
        error: "Email sending failed",
        details: error?.message || error,
      },
      { status: 500 }
    );
  }
}

function emailTemplate({
  name,
  email,
  phone,
  message,
}: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  return `
  <div style="background:#0a0a0a;padding:40px;font-family:Arial,sans-serif;">
    <div style="max-width:600px;margin:auto;background:#111;border-radius:16px;overflow:hidden;">
      
      <div style="padding:24px;border-bottom:1px solid #222;">
        <h2 style="color:#fff;margin:0;">New Shoot Booking</h2>
        <p style="color:#999;margin-top:6px;">Website Contact Form</p>
      </div>

      <div style="padding:24px;color:#ddd;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>

        <div style="margin-top:20px;">
          <p style="margin-bottom:8px;"><strong>Message</strong></p>
          <div style="background:#000;padding:16px;border-radius:12px;color:#bbb;">
            ${message}
          </div>
        </div>
      </div>

      <div style="padding:16px;text-align:center;color:#666;border-top:1px solid #222;">
        © ${new Date().getFullYear()} WebXAI
      </div>
    </div>
  </div>
  `;
}
