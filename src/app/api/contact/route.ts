import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, mobile, quantity, productType, address, message } = await request.json();

    if (!name || !mobile || !quantity || !productType || !address) {
      return NextResponse.json(
        { error: "Required fields are missing." },
        { status: 400 }
      );
    }

    console.log("----- VAADRO INQUIRY RECEIVED -----");
    console.log(`Customer Name: ${name}`);
    console.log(`Mobile Number: ${mobile}`);
    console.log(`Quantity Required: ${quantity}`);
    console.log(`Product Type: ${productType}`);
    console.log(`Delivery Address: ${address}`);
    console.log(`Message: ${message || "N/A"}`);
    console.log("-----------------------------------");

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpHost && smtpPort && smtpUser && smtpPass) {
      // SMTP configuration is available, send email
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: parseInt(smtpPort),
        secure: parseInt(smtpPort) === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const emailHtml = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #f8fafc;">
          <h2 style="color: #0b2545; border-bottom: 2px solid #00b4d8; padding-bottom: 8px;">New VAADRO Lead - Discount Applied</h2>
          <p>You have received a new inquiry from the corporate website with request for discount eligibility:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e2e8f0; font-weight: bold; width: 180px;">Customer Name</td>
              <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Mobile Number</td>
              <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;"><a href="tel:${mobile}">${mobile}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Product Size</td>
              <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">${productType}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Quantity Required</td>
              <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">${quantity}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Delivery Address</td>
              <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">${address}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e2e8f0; font-weight: bold; vertical-align: top;">Message</td>
              <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">${message || "N/A"}</td>
            </tr>
          </table>
          
          <div style="margin-top: 24px; font-size: 11px; color: #64748b;">
            This inquiry was automatically dispatched from the VAADRO Corporate Website form handler.
          </div>
        </div>
      `;

      await transporter.sendMail({
        from: `"VAADRO Corporate" <${smtpUser}>`,
        to: "gauravsadanand2002@gmail.com",
        subject: `New VAADRO Website Inquiry from ${name}`,
        html: emailHtml,
      });

      return NextResponse.json({ success: true, message: "Email dispatched successfully via SMTP." });
    } else {
      // SMTP variables not set, fallback to console log (simulating submission success)
      return NextResponse.json({
        success: true,
        message: "Inquiry logged to server console. SMTP settings not configured, mock success returned.",
      });
    }
  } catch (error) {
    console.error("API error inside /api/contact:", error);
    return NextResponse.json(
      { error: "Internal server error occurred." },
      { status: 500 }
    );
  }
}
