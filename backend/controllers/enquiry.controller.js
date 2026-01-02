import { sendMail } from "../utils/mailer.js";
import { env } from "../config/env.js";

export const handleEnquiry = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      phone,
      email,
      designation,
      organization,
      message,
    } = req.body;

    if (!firstName || !email || !phone || !message) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const html = `
      <h2>New Website Enquiry</h2>
      <p><b>Name:</b> ${firstName} ${lastName || ""}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      ${designation ? `<p><b>Designation:</b> ${designation}</p>` : ""}
      ${organization ? `<p><b>Organization:</b> ${organization}</p>` : ""}
      <p><b>Message:</b></p>
      <p>${message}</p>
    `;

    await sendMail({
      to: env.ENQUIRY_RECEIVER,
      subject: "New Enquiry - Stemz Website",
      html,
    });

    res.status(200).json({ message: "Enquiry submitted successfully" });
  } catch (err) {
    next(err);
  }
};
