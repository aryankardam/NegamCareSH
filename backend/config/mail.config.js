import nodemailer from "nodemailer";
import { env } from "./env.js";

export const mailTransporter = nodemailer.createTransport({
  host: env.SMTP_HOST,
  port: Number(env.SMTP_PORT),
  secure: false, // TLS
  auth: {
    user: env.SMTP_USER,
    pass: env.SMTP_PASS,
  },
});
