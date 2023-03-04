import { IVideo, VideoRequestProps } from '../Interfaces/IVideo'

export abstract class AbstractRepositoriesVideo {
  abstract create(VideoRequest: VideoRequestProps): Promise<void>

  abstract findAll(): Promise<IVideo[]>

  abstract findOneBy(name: string): Promise<IVideo | null>

}
