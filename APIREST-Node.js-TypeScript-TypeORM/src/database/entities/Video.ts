import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm'
import { Room } from './Room'

@Entity('videos')
export class Video {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'text' })
  title: string

  @Column({ type: 'text' })
  url: string

  // Aqui realmente é uma coluna na tabela videos, ou seja, um video pode ter uma sala, mas uma sala pode ter varios videos
  @ManyToOne(() => Room, room => room.videos)
  @JoinColumn({ name: 'room_id' })
  room: Room
}
