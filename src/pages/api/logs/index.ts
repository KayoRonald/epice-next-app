import type { NextApiRequest, NextApiResponse } from 'next'
import { dataLogs } from '../../../data/logs'

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(dataLogs.reverse())
}