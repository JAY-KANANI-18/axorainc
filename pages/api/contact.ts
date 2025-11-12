import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import clientPromise from "../../lib/mongo";

type ResponseData = {
  message: string;
  success: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed", success: false });
  }

  const { name, email, company, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      message: "Missing required fields: name, email, and message are required",
      success: false,
    });
  }

  try {
    // 1️⃣ Save submission to MongoDB
    const client = await clientPromise;
    const db = client.db("axora_portfolio"); // your DB name
    await db.collection("contacts").insertOne({
      name,
      email,
      company: company || "Not provided",
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
      from: `"Axora Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({
      message: "Form submitted successfully. We’ll get back to you soon!",
      success: true,
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({
      message: "Internal server error. Please try again later.",
      success: false,
    });
  }
}
