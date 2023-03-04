import { AbstractRepositoriesVideo } from '../abstract-repositories/abstract.repositories-video'
import { VideosLengthNotFound } from '../Error/VideosLengthNotFound'
import { VideosNotFound } from '../Error/VideosNotFound'
import { IVideo } from '../Interfaces/IVideo'

export class GetAllVideosService {
  constructor(private VideoRepository: AbstractRepositoriesVideo){}

  async execute(): Promise<IVideo[] | Error>  {
    const videos = await this.VideoRepository.findAll()
    if (!videos) return new VideosNotFound()
    if (videos.length === 0) return new VideosLengthNotFound()
    return videos
  }
}
