/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

interface ExtendedNextApiRequest extends NextApiRequest {
  body: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
};

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: false,
  auth: {
    user: process.env.USER_GMAIL,
    pass: process.env.PASS_GMAIL
  },
  tls: { rejectUnauthorized: false }
});

export default (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  console.log(process.env.USER_GMAIL)
  const { name, email, subject, message } = req.body
  const emailSend = {
    from: email,
    to: process.env['USER'],
    subject: `Nextjs - ${name.split(' ')[0]} - ${subject}.`,
    replyTo: email,
    html: `
      <b>Nova mensagem de ${name}</b>
      </br>
      <p>${message}</p>
    `,
  }
  transporter.sendMail(emailSend, function (error, info) {
    if (error) {
      return res.status(400).json({ message: 'Falha na conexão code erro `EMAIL-300`' });;
    } else {
      return res.status(200).json({ message: 'sucesso' });;
    }
  });
}