import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: false,
  auth: {
    user: process.env.gmail,
    pass: process.env.PASS_GMAIL
  },
  tls: { rejectUnauthorized: false }
});