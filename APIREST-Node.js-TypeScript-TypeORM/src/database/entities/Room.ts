import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany } from 'typeorm'
import { Subject } from './Subject'
import { Video } from './Video'

// Entidade criada antes de fazer as migrations e usada para fazer as migrations e referencia a tabela rooms do banco de dados
@Entity('rooms')
export class Room {
  // Gera o id automaticamente e unico
  @PrimaryGeneratedColumn()
  id: number

  @Column({type: 'text'})
  name: string

  @Column({type: 'text', nullable: true})
  description: string

  // Relacionamento 1:N, ou seja, uma sala pode ter varios videos. Ou seja isso aqui é somente um relacionamento, nao é uma tabela/array/coluna na tabela do banco de dados, então se eu quiser pegar os videos dessa sala, eu teria que criar um relacionamento, igual esta no RoomController.ts, na rota list
  @OneToMany(() => Video, video => video.room)
  videos: Video[]

  @ManyToMany(() => Subject, subject => subject.rooms)
  subjects: Subject[]
}
