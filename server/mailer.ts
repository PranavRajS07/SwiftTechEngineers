import nodemailer from "nodemailer";

const smtpConfigured = !!(
  process.env.SMTP_HOST &&
  process.env.SMTP_USER &&
  process.env.SMTP_PASS
);

const transporter = smtpConfigured
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
  : null;

interface MailOptions {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendMail(options: MailOptions): Promise<{ success: boolean }> {
  if (!transporter) {
    console.log("\n📧 [EMAIL - SMTP not configured, logging submission]");
    console.log(`To: ${options.to}`);
    console.log(`Subject: ${options.subject}`);
    console.log(`Reply-To: ${options.replyTo || "n/a"}`);
    console.log("─────────────────────────────────────────────");
    return { success: true };
  }

  try {
    await transporter.sendMail({
      from: `"SwiftTech Website" <${process.env.SMTP_USER}>`,
      to: options.to,
      subject: options.subject,
      html: options.html,
      replyTo: options.replyTo,
    });
    console.log(`✅ Email sent to ${options.to}`);
    return { success: true };
  } catch (err) {
    console.error("❌ Email send failed:", err);
    return { success: false };
  }
}
