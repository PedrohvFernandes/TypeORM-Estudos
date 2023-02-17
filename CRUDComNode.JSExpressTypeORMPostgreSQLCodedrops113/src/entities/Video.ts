import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'
import { Category } from './Category'

// Essa entidade ela referencia a tabela categories do banco de dados.
// Entidade criada apos fazer as migrations
@Entity('videos')
export class Video {
  @PrimaryColumn({type: 'varchar'})
  id: string

  @Column({type: 'varchar'})
  name: string

  @Column({type: 'varchar'})
  description: string

  @Column({type: 'varchar'})
  duration: number

  @Column({type: 'varchar'})
  category_id: string

  @ManyToOne(() => Category)
  @JoinColumn({name: 'category_id'})
  category: Category

  @CreateDateColumn()
  created_at: Date

  constructor() {
    if(!this.id){
      this.id = uuid()
    }
  }
}