import { AppDataSource } from '../database/data-source'
import { Room } from '../database/entities/Room'

export const roomRepository = AppDataSource.getRepository(Room)

// export const roomSubjectQueyBuilder =
//   AppDataSource.createQueryBuilder().relation(Room, 'subjects')
