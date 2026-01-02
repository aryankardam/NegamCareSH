import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: process.env.PORT,
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: process.env.SMTP_PORT,
  SMTP_USER: process.env.SMTP_USER,
  SMTP_PASS: process.env.SMTP_PASS,
  ENQUIRY_RECEIVER: process.env.ENQUIRY_RECEIVER,
  CAREER_RECEIVER: process.env.CAREER_RECEIVER,
  CLIENT_URL: process.env.CLIENT_URL,
  NODE_ENV: process.env.NODE_ENV,
};
