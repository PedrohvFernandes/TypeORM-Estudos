import { AbstractRepositoriesVideo } from '@infra/http/abstract-repositories/abstract.repositories-video'
import { IVideo, VideoRequestProps } from '@infra/http/Interfaces/IVideo'
import { AppDataSource } from '../data-source'
import { Video } from '../entities/Video'

export class VideoRepository implements AbstractRepositoriesVideo {
  private VideoRepository = AppDataSource.getRepository(Video)

  async findAll(): Promise<IVideo[]> {
    const videos = await this.VideoRepository.find({
      relations: ['category']
    })

    return videos
  }

  async findOneBy(name: string): Promise<IVideo | null> {
    const video = await this.VideoRepository.findOneBy({ name })
    return video
  }

  async create(VideoRequest: VideoRequestProps): Promise<void> {
    const video = this.VideoRepository.create(VideoRequest)

    await this.VideoRepository.save(video)
  }
}
