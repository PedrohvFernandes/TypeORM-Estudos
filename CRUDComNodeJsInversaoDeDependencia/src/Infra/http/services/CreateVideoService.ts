import { AbstractRepositoriesVideo } from '../abstract-repositories/abstract.repositories-video'
import { AbstractRepositoriesCategory } from '../abstract-repositories/abstract.repositories-category'
import { IVideo, VideoRequestProps } from '../Interfaces/IVideo'
import { NameIsRequired } from '../Error/NameIsRequired'
import { DescriptionIsRequired } from '../Error/DescriptionIsRequired'
import { DurationIsRequired } from '../Error/DurationIsRequired'
import { CategoryIdIsRequired } from '../Error/CategoryIdIsRequired'
import { CategoryNotFound } from '../Error/CategoryNotFound'
import { VideoAlreadyExists } from '../Error/VideoAlreadyExists'

export class CreateVideoService {
  constructor(
    private VideoRepository: AbstractRepositoriesVideo,
    private CategoryRepository: AbstractRepositoriesCategory
  ) {}
  async execute(
    VideoRequest: VideoRequestProps
  ): Promise<IVideo | Error | null> {
    if (!VideoRequest.name) return new NameIsRequired()
    if (!VideoRequest.description) return new DescriptionIsRequired()
    if (!VideoRequest.duration) return new DurationIsRequired()
    if (VideoRequest.duration == 0) return new DurationIsRequired()
    if (!VideoRequest.category_id) return new CategoryIdIsRequired()

    const categoryAlreadyExists = await this.CategoryRepository.findOne(
      VideoRequest.category_id
    )
    if (!categoryAlreadyExists) return new CategoryNotFound()

    const videoAlreadyExists = await this.VideoRepository.findOneBy(
      VideoRequest.name
    )
    if (videoAlreadyExists) return new VideoAlreadyExists()

    await this.VideoRepository.create(VideoRequest)

    // await VideoRepository.save(video)
    return await this.VideoRepository.findOneBy(VideoRequest.name)
  }
}
