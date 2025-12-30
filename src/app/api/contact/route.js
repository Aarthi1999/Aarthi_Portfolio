export const runtime = "nodejs";

import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, subject, message } = await req.json();

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: subject || "New contact message",
      html: `
        <h3>New message from portfolio</h3>
        <p>Name: </b>${name}</b></p>
        <p>Email: </b>${email}</b></p>
        <p><b>Message: </b>${message}</p>
      `,
    });
    return Response.json({ success: true });
  } catch (error) {
    console.error("SERVER ERROR:", error);
    return Response.json({ success: false }, { status: 500 });
  }
}
