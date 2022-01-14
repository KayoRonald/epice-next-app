import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../connection'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const results = await db.query(
      'SELECT COUNT(*) FROM `EPICEDB`'
    );
    await db.end();
    console.log(results)
    return res.status(200).send('')
  } catch (error: any) {
    return res.status(400).json({
      message: 'Falha na conexão code erro `EMAIL-300`'
    });
  }
};