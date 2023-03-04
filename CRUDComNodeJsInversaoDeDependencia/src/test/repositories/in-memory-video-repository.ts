import { IVideo } from '@infra/http/Interfaces/IVideo'
import { AbstractRepositoriesVideo } from '@infra/http/abstract-repositories/abstract.repositories-video'

export class InMemoryVideoRepository
  implements AbstractRepositoriesVideo
{
  public videos: IVideo[] = []

  async findOneBy(name: string): Promise<IVideo | null> {
    const videoExist = this.videos.find(video => video.name === name)
    if (!videoExist) return null
    return videoExist
  }

  async findAll(): Promise<IVideo[]> {
    return this.videos
  }

  async create(video: IVideo): Promise<void> {
    this.videos.push(video)
  }
}
