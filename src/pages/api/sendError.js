import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { user_id, session_id } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_APP_GMAIL_USER,
      pass: process.env.NEXT_APP_GMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.NEXT_APP_GMAIL_USER,
      to: "ngoc@rockship.co, trang@rockship.co, nhu@rockship.co",
      subject: 'New Error detected on Production',
      html: `<p><b>user_id:</b> ${user_id}</p>
             <p><b>session_id:</b> ${session_id}</p>
             <a href="https://rockship.co/?user_id=${user_id}&session_id=${session_id}">Link Conversation Error</a>`,
    });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to send email" });
  }
}
