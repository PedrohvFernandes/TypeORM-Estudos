import { Request, Response } from 'express'
import { CategoryRepository } from '@database/repositories/CategoryRepository'
import { VideoRepository } from '@database/repositories/VideoRepository'
import { CreateVideoService } from '../services/CreateVideoService'
import { GetAllVideosService } from '../services/GetAllVideoService'

export class ControllerVideo {
  async CreateVideoController(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { name, description, duration, category_id } = request.body

    const CategoryRepositoryDB = new CategoryRepository()
    const VideoRepositoryDB = new VideoRepository()

    const result = await new CreateVideoService(
      VideoRepositoryDB,
      CategoryRepositoryDB
    ).execute({
      name,
      description,
      duration,
      category_id
    })

    if (result instanceof Error) {
      return response.status(400).json({ error: result.message })
    }

    return response.status(201).json(result)
  }

  async GetAllVideosController(
    request: Request,
    response: Response
  ): Promise<Response> {
    const VideoRepositoryDB = new VideoRepository()

    const result = await new GetAllVideosService(VideoRepositoryDB).execute()

    if (result instanceof Error) {
      return response.status(400).json({ error: result.message })
    }

    return response.status(200).json(result)
  }
}
