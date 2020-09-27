import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database';

const allAvos = async (request: NextApiRequest, response: NextApiResponse) => {
  const db: DB = new DB()
  const id: string = request.query.id as string

  const entry: any = await db.getById(id)

  // response.statusCode = 200
  // response.setHeader('Content-type', 'application/json')
  // response.end(JSON.stringify({ data: entry }))

  response.status(200).json(entry)
}

export default allAvos