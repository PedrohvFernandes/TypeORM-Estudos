import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn
} from 'typeorm'

// Ela serve como espelho pra tabela users dentro do db, toda mudança que eu fizer aqui, eu preciso refletir no db, gerando uma nova migration com o generate e rodando run pra subir a nova migration. E pra que isso aconteça é preciso colocar ela dentro do data-source.ts, no array de entities.
@Entity('users')
class User {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ type: 'varchar', length: 100, nullable: false})
  name: string

  @Column({ type: 'varchar', length: 100, unique: true, nullable: false})
  email: string

  @CreateDateColumn()
  created_at: Date
}

export default User
