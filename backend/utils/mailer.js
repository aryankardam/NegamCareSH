import { mailTransporter } from "../config/mail.config.js";

export const sendMail = async ({ to, subject, html, attachments = [] }) => {
  await mailTransporter.sendMail({
    from: `"Stemz Careers" <${process.env.SMTP_USER}>`,
    to,
    subject,
    html,
    attachments,
  });
};
