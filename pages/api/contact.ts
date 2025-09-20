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


    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.GMAIL_USER,
        clientId: process.env.GMAIL_CLIENT_ID,
        clientSecret: process.env.GMAIL_CLIENT_SECRET,
        refreshToken: process.env.GMAIL_REFRESH_TOKEN,
      },
    });

    await transporter.sendMail({
      from: `"Axora Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // send to yourself
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
