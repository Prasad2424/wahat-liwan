"use server"
import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();

  const { name, email, phone, message } = body;

  if (!name?.trim() || !email?.trim() || !phone?.trim() || !message?.trim()) {
    return new Response(JSON.stringify({ error: "All fields are required." }), {
      status: 400,
    });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  console.log("EMAIL_USER:", process.env.EMAIL_USER);

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email send error:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}