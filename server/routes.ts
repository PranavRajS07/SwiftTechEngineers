import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendMail } from "./mailer";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.post("/api/contact", async (req, res) => {
    const { name, email, phone, company, division, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email and message are required." });
    }

    const divisionLabel =
      division === "engineers"
        ? "Swift Tech Engineers – Water Treatment"
        : division === "builders"
        ? "Swift Tech Builders & Constructions"
        : division === "altus"
        ? "Swift Altus – Software & AI"
        : "Not specified";

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;">
        <div style="background:#1e3a8a;color:white;padding:24px;">
          <h2 style="margin:0;font-size:20px;">New Enquiry – SwiftTech Website</h2>
          <p style="margin:4px 0 0;opacity:0.8;font-size:13px;">Received via swifttech.in contact form</p>
        </div>
        <div style="padding:24px;background:#f8fafc;">
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#64748b;font-size:13px;width:120px;">Name</td><td style="padding:8px 0;font-weight:600;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;font-size:13px;">Email</td><td style="padding:8px 0;font-weight:600;"><a href="mailto:${email}" style="color:#1e3a8a;">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#64748b;font-size:13px;">Phone</td><td style="padding:8px 0;">${phone || "Not provided"}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;font-size:13px;">Company</td><td style="padding:8px 0;">${company || "Not provided"}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;font-size:13px;">Division</td><td style="padding:8px 0;">${divisionLabel}</td></tr>
          </table>
          <div style="margin-top:16px;padding:16px;background:white;border-radius:6px;border-left:4px solid #1e3a8a;">
            <p style="color:#64748b;font-size:13px;margin:0 0 8px;">Message</p>
            <p style="margin:0;line-height:1.6;">${message.replace(/\n/g, "<br>")}</p>
          </div>
        </div>
        <div style="padding:16px 24px;background:#f1f5f9;font-size:12px;color:#94a3b8;text-align:center;">
          SWIFTTECH ENGINEERS (INDIA) PVT. LTD. &nbsp;·&nbsp; sales@swifttech.in
        </div>
      </div>
    `;

    const result = await sendMail({
      to: "sales@swifttech.in",
      subject: `New Enquiry from ${name}${company ? ` (${company})` : ""} – SwiftTech Website`,
      html,
      replyTo: email,
    });

    return res.json({ success: true, emailSent: result.success });
  });

  app.post("/api/careers", async (req, res) => {
    const { name, email, phone, position, experience, workType, message } = req.body;

    if (!name || !email || !position) {
      return res.status(400).json({ error: "Name, email and position are required." });
    }

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;">
        <div style="background:#1e3a8a;color:white;padding:24px;">
          <h2 style="margin:0;font-size:20px;">New Job Application – SwiftTech</h2>
          <p style="margin:4px 0 0;opacity:0.8;font-size:13px;">Received via Careers page</p>
        </div>
        <div style="padding:24px;background:#f8fafc;">
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#64748b;font-size:13px;width:140px;">Applicant</td><td style="padding:8px 0;font-weight:600;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;font-size:13px;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#1e3a8a;">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#64748b;font-size:13px;">Phone</td><td style="padding:8px 0;">${phone || "Not provided"}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;font-size:13px;">Position</td><td style="padding:8px 0;font-weight:600;color:#1e3a8a;">${position}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;font-size:13px;">Experience</td><td style="padding:8px 0;">${experience || "Not specified"}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;font-size:13px;">Work Preference</td><td style="padding:8px 0;">${workType || "Not specified"}</td></tr>
          </table>
          <div style="margin-top:16px;padding:16px;background:white;border-radius:6px;border-left:4px solid #1e3a8a;">
            <p style="color:#64748b;font-size:13px;margin:0 0 8px;">Cover Note / Message</p>
            <p style="margin:0;line-height:1.6;">${message ? message.replace(/\n/g, "<br>") : "No message provided."}</p>
          </div>
        </div>
        <div style="padding:16px 24px;background:#f1f5f9;font-size:12px;color:#94a3b8;text-align:center;">
          SWIFTTECH ENGINEERS (INDIA) PVT. LTD. &nbsp;·&nbsp; admin@swifttech.in
        </div>
      </div>
    `;

    const result = await sendMail({
      to: "admin@swifttech.in",
      subject: `Job Application: ${position} – ${name}`,
      html,
      replyTo: email,
    });

    return res.json({ success: true, emailSent: result.success });
  });

  return httpServer;
}
