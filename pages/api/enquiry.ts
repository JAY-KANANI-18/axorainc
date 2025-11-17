import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import clientPromise from "../../lib/mongo";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  }

  try {
    const { name, email, company, phone, message, context } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: "Missing required fields" });
    }

    const payload = {
      name,
      email,
      company: company || "",
      phone: phone || "",
      message,
      context: context || {},
      receivedAt: new Date().toISOString(),
      userAgent: req.headers["user-agent"] || "",
      ip: (req.headers["x-forwarded-for"] as string) || req.socket.remoteAddress || "",
    };

    // Optional: Slack webhook integration if configured
    const webhook = process.env.SLACK_WEBHOOK_URL;
    if (webhook) {
      try {
        await fetch(webhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text: `New enquiry:\nName: ${name}\nEmail: ${email}\nCompany: ${company || "-"}\nPhone: ${phone || "-"}\nContext: ${JSON.stringify(context)}\nMessage: ${message}`,
          }),
        });
      } catch (err) {
        console.warn("Slack webhook failed", err);
      }
    } else {
      const client = await clientPromise;
      const db = client.db("axora_portfolio"); // your DB name
      await db.collection("enquiry").insertOne({
        name,
        email,
        company: company || "Not provided",
        context: JSON.stringify(context),
        phone: phone || "Not provided",
        message,
        createdAt: new Date(),
      });

      const smtpHost = process.env.SMTP_HOST;
      const smtpPort = Number(process.env.SMTP_PORT || 587);
      const smtpSecure = process.env.SMTP_SECURE
        ? process.env.SMTP_SECURE === "true"
        : smtpPort === 465;
      const smtpUser = process.env.SMTP_USER;
      const smtpPass = process.env.SMTP_PASS;
      const emailFrom = process.env.EMAIL_FROM || smtpUser;
      const emailTo = process.env.EMAIL_TO || emailFrom;

      if (!smtpHost || !emailFrom || !emailTo) {
        return res.status(500).json({
          message:
            "SMTP configuration missing. Please set SMTP_HOST, EMAIL_FROM, and EMAIL_TO environment variables.",
          success: false,
        });
      }

      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: smtpUser
          ? {
            user: smtpUser,
            pass: smtpPass,
          }
          : undefined,
      });

      await transporter.sendMail({
        from: `"Axora Contact" <${process.env.EMAIL_FROM}>`,
        to: process.env.GMAIL_USER,
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || "Not provided"}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Context:</strong> ${JSON.stringify(context)}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });

    }

    return res.status(200).json({
      message: "Form submitted successfully. We’ll get back to you soon!",
      success: true,
    });
  } catch (error) {
    console.error("Enquiry API error", error);
    return res.status(500).json({ ok: false, error: "Server error" });
  }
}
