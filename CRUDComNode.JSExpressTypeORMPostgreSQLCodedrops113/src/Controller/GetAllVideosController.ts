import { Request, Response } from 'express'
import { GetAllVideosService } from '../services/GetAllVideoService'

export class GetAllVideosController {
  async handle(request: Request, response: Response) {
    const services = new GetAllVideosService()
    const result = await services.execute()
    if (result instanceof Error) {
      return response.status(400).json({ error: result.message })
    }
    return response.json(result)
  }
}
