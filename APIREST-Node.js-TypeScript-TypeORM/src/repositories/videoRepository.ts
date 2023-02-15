import { AppDataSource } from '../database/data-source'
import { Video } from '../database/entities/Video'

export const videoRepository = AppDataSource.getRepository(Video)

