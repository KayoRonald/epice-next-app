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
    const results = await db.transaction()
      .query('DELETE FROM `EPICEDB` WHERE `EPICEDB`.`email` = "' + email + '"').query((rows: any) => {
        if (rows.affectedRows == 0) {
          return res.status(401).json({
            message: 'Este email não existe em nosso banco de dados'
          })
        }
      })
      .commit(); // execute the queries
    await db.end();
    console.log(results)
    return res.status(200).send('')
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: 'Falha na conexão code erro `EMAIL-300`'
    });
  }
};