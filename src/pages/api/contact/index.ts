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
    user: process.env.gmail,
    pass: process.env.PASS_GMAIL
  },
  tls: { rejectUnauthorized: false }
});

export default (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  const { name, email, subject, message } = req.body
  const emailSend = {
    from: `${name} <${email}>`,
    to: '@suporte ' + process.env.gmail,
    subject: `Nextjs - ${name.split(' ')[0]} - ${subject}.`,
    replyTo: email,
    html: `
     <div>
     <img style="width: 250px;height: auto;width: 50%;max-width: 500px;" src="https://i.ibb.co/k64Ntj8/Email-campaign-pana.png" />
     <p>${message}</p>
     </br>
     <b>Nova mensagem de ${name.split(' ')[0]}</b>
     </div>
    `,
  }
  transporter.sendMail(emailSend, function (error, info) {
    if (error) {
      return res.status(400).json({ message: 'Falha na conexão code erro `EMAIL-300`' });
    } else {
      return res.status(200).json({ message: 'sucesso' });;
    }
  });
}