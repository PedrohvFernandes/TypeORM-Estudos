import { AppDataSource } from '../database/data-source'
import { Video } from '../entities/Video'

export const VideoRepository = AppDataSource.getRepository(Video)
