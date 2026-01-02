import { sendMail } from "../utils/mailer.js";
import { env } from "../config/env.js";

export const handleCareer = async (req, res, next) => {
  try {
    const { name, email, phone, position, message } = req.body;

    if (!name || !email || !phone || !position) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    if (!req.file) {
      return res.status(400).json({ message: "Resume is required" });
    }

    const html = `
      <h2>New Career Application</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Position:</b> ${position}</p>
      ${message ? `<p><b>Message:</b> ${message}</p>` : ""}
    `;

    await sendMail({
      to: env.CAREER_RECEIVER,
      subject: `Career Application - ${position}`,
      html,
      attachments: [
        {
          filename: req.file.originalname,
          content: req.file.buffer,
          contentType: req.file.mimetype,
        },
      ],
    });

    res.status(200).json({ message: "Application submitted successfully" });
  } catch (err) {
    next(err);
  }
};
