import { Request, Response } from 'express'
import { AppDataSource } from '../database/data-source'
import { Room } from '../database/entities/Room'
import { roomRepository } from '../repositories/roomRepository'
import { subjectRepository } from '../repositories/subjectRepository'
import { videoRepository } from '../repositories/videoRepository'

export class RoomController {
  async create(req: Request, res: Response) {
    const { name, description } = req.body

    if (!name) {
      return res.status(400).json({ message: 'Name is required' })
    }
    if (!description) {
      return res.status(400).json({ message: 'Description is required' })
    }

    try {
      const newRoom = roomRepository.create({
        name,
        description
      })

      await roomRepository.save(newRoom)

      return res.status(201).json(newRoom)
    } catch (err) {
      console.log(err)
      return res.status(500).json({ messageError: 'Internal server error' })
    }
  }

  async createVideo(req: Request, res: Response) {
    const { title, url } = req.body
    const { room_id } = req.params

    if (!title) {
      return res.status(400).json({ message: 'Name is required' })
    }
    if (!url) {
      return res.status(400).json({ message: 'Description is required' })
    }

    if (!room_id) {
      return res.status(400).json({ message: 'Room is required' })
    }

    try {
      const room = await roomRepository.findOneBy({ id: Number(room_id) })

      if (!room) {
        return res.status(404).json({ message: 'Room not found' })
      }
      const newVideo = videoRepository.create({
        title,
        url,
        room
      })

      await videoRepository.save(newVideo)

      return res.status(201).json(newVideo)
    } catch (err) {
      console.log(err)
      return res.status(500).json({ messageError: 'Internal server error' })
    }
  }

  async roomSubject(req: Request, res: Response) {
    const { subject_id } = req.body
    const { room_id } = req.params

    if (!subject_id) {
      return res.status(400).json({ message: 'Subject is required' })
    }

    if (!room_id) {
      return res.status(400).json({ message: 'Room is required' })
    }

    try {
      const room = await roomRepository.findOneBy({ id: Number(room_id) })
      if (!room) {
        return res.status(404).json({ message: 'Subject not found' })
      }

      const subject = await subjectRepository.findOneBy({
        id: Number(subject_id)
      })

      if (!subject) {
        return res.status(404).json({ message: 'Subject not found' })
      }

      // Para adicionar um relacionamento entre duas entidades, você pode usar essa primeira maneira que possui retorno ou

      // https://orkhan.gitbook.io/typeorm/docs/relational-query-builder
      // const roomUpdated = await roomRepository.findOne({
      //   where: { id: Number(room_id) },
      //   relations: {
      //     subjects: true
      //   }
      // })

      // if (!roomUpdated) {
      //   return res.status(404).json({ message: 'Room not found' })
      // }

      // roomUpdated?.subjects.push(subject)

      // const roomSubject = await roomRepository.save(roomUpdated ?? {})

      // o método add() do QueryBuilder. O método add() adiciona um relacionamento entre duas entidades e não possui nenhum retorno.
      const roomSubject = await roomRepository
        .createQueryBuilder()
        .relation(Room, 'subjects')
        .of(room)
        .add(subject)

      return res.status(200).json(roomSubject)
    } catch (error) {
      console.log(error)
      return res.status(500).json({ messageError: 'Internal server error' })
    }
  }

  async list(req: Request, res: Response) {
    try {
      const rooms = await roomRepository.find({
        relations: {
          subjects: true,
          videos: true
        }
      })

      return res.status(200).json(rooms)
    } catch (err) {
      console.log(err)
      return res.status(500).json({ messageError: 'Internal server error' })
    }
  }
}
