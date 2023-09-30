import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { others, feedback, user_id, session_id } = req.body;

  const filteredFeedback = feedback.filter((item) => item !== "Others");

  const feedbackText = filteredFeedback
    .map((item, index) => `<li key=${index}>${item}</li>`).join("");
  
  const othersItem = feedback.find((item) => item === "Others");
  const othersIndex = feedback.findIndex((item) => item === "Others")
  const othersText = othersItem ? `<li key=${othersIndex}>Others: ${others}</li>` : "";
  const pElementsHTML = `
    Dear Team,<br><br>
    We've received feedback from user about his/her experience with Rockship Chatbot (You can view detailed conversation <a href="https://dev.rockship.co/?user_id=${user_id}&session_id=${session_id}">here</a>). User has identified some challenges with:
    <ul>
      ${feedbackText}
      ${othersText}
    </ul>
    Best regards,
  `;

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
      to: "ngoc@rockship.co, hoainhu.work@gmail.com",
      subject: "Feedback report",
      html: pElementsHTML,
    });

    return res.status(200).json({ message: "Emails sent successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to send emails" });
  }
}
