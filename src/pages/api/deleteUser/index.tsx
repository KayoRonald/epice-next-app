/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../connection'
interface ExtendedNextApiRequest extends NextApiRequest {
  body: {
    email: string;
  };
};

export default async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  const { email } = req.body
  try {
    const results = await db.query('DELETE FROM `EPICEDB` WHERE `EPICEDB`.`email` = "' + email + '"');
    await db.end();
    console.log(results)
    return res.status(200).send('')
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: 'Falha na conexão code erro `EMAIL-300`' });
  }
};