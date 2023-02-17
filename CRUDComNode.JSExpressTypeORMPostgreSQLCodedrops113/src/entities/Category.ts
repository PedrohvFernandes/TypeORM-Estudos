import { Entity, Column, CreateDateColumn, PrimaryColumn} from 'typeorm'
import { v4 as uuid } from 'uuid'

// Essa entidade ela referencia a tabela categories do banco de dados.
// Entidade criada apos fazer as migrations
@Entity('categories')
export class Category {
  @PrimaryColumn({type: 'varchar'})
  id: string

  // Se a coluna tiver o mesmo nome dentro do BD, então não precisa passar o nome pra ela @Column('name')
  @Column({type: 'varchar', name: 'name'})
  name: string

  @Column({type: 'varchar'})
  description: string

  @CreateDateColumn()
  created_at: Date

  // Esse construtor é para verificar se o id ele esta vindo preenchido: quando a gente quer remover, alterar ou buscar essa info. Ou o caso a onde o id não vem preenchido quando estamos inserindo uma nova info. Isso porque estamos deixando a nossa aplicação gerar o id automaticamente 
  constructor() {
    if(!this.id){
      this.id = uuid()
    }
  }
}