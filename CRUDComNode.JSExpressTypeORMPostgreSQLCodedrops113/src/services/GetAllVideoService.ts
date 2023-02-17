import { VideoRepository } from "../repositories/VideoRepository";

export class GetAllVideosService {
  async execute() {
    const videos = await VideoRepository.find({
      relations: ['category']
    })
    if (!videos) return new Error('Videos not found')
    if (videos.length === 0) return new Error('Videos not found')
    console.log('sdddddddd',videos)
    return videos;
  }
}