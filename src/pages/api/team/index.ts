/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import type { NextApiRequest, NextApiResponse } from 'next'
import { palestrantes } from '../../../data/palestrante'

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(palestrantes)
}