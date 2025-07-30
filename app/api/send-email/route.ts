import { NextResponse } from "next/server";
import nodemailer from "nodemailer";


export async function POST(request: Request) {
  try {
    const { name, email, message, phone, service } = await request.json();
console.log("Received data:", { name, email, message });
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,        // your Gmail ID
        pass: process.env.EMAIL_PASS,        // your App Password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO, // your destination email
      subject: `Enquiry Message: Sooryathejus Group Canada`,
      text: `
        Name: ${name}
        Email: ${email}
        Mobile Number: ${phone}
        Service requested: ${service}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: "Email send failed" }, { status: 500 });
  }
}
