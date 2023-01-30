import type { VercelRequest, VercelResponse } from '@vercel/node'

import one from '../helper/one'

export default function status(req: VercelRequest, res: VercelResponse) {
  res.statusCode = 200
  res.json({ version: process.env.VERSION, one: one() })
}
