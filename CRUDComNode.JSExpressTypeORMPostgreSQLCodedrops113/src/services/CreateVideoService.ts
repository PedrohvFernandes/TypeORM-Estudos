import { VideoRepository } from '../repositories/VideoRepository'
import { CategoryRepository } from '../repositories/CategoryRepository'
import { Video } from '../entities/Video'

type VideoRequestProps = {
  name: string
  description: string
  duration: number
  category_id: string
}

export class CreateVideoService {
  async execute({
    name,
    description,
    duration,
    category_id
  }: VideoRequestProps): Promise<Error | Video> {
    if (!name) return new Error('Name is required')
    if (!description) return new Error('Description is required')
    if (!duration) return new Error('Duration is required')
    if (!category_id) return new Error('Category is required')

    const category = await CategoryRepository.findOne({
      where: { id: category_id }
    })

    if (!category) return new Error('Category not found')

    const video = VideoRepository.create({
      name,
      description,
      duration,
      category_id
    })

    await VideoRepository.save(video)
    return video
  }
}
