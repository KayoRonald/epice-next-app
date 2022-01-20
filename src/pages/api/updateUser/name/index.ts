import type { NextApiResponse } from 'next';
import { db } from '../../../../connection';
import { ExtendedNextApiRequest } from '../../../../utils/interface'


export default async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  const { name, email } = req.body
  try {
    const results = await db.transaction()
      .query('UPDATE `EPICEDB` SET `name` = "' + name + '"WHERE `EPICEDB`.`email` = "' + email + '"')
      .query((rows: any) => {
        if (rows.affectedRows == 0) {
          return res.status(401).json({
            message: 'Este email não existe em nosso banco de dados'
          });
        }
      })
      .commit(); // execute the queries
    await db.end();
    console.log(results)
    return res.status(200).send('')
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: 'Falha na conexão'
    });
  }
};