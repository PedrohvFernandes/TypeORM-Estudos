import { AppDataSource } from '../database/data-source'
import { Subject } from '../database/entities/Subject'

export const subjectRepository = AppDataSource.getRepository(Subject)

