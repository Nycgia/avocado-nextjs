import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database';

const allAvos = async (request: NextApiRequest, response: NextApiResponse) => {
  const db: DB = new DB()
  const id: string = request.query.id as string

  const entry: any = await db.getById(id)

  if (entry) {
    response.status(200).json(entry)
  } else {
    response.status(404).json({})
  }
}

export default allAvos