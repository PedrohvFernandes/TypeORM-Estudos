import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
import { Room } from "./Room"

@Entity('subjects')
export class Subject{
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text'})
    name: string

    @ManyToMany(() => Room, room => room.subjects)
    // Tabela ternaria Uma sala pode ter varias disciplinas e uma disciplina pode ter varias salas. Ou seja, uma tabela que relaciona as duas tabelas de origem e destino Room e Subject com os ids de cada uma
    @JoinTable({
        name: 'room_subject',
        // Nome da coluna que referencia a tabela de origem Subject
        joinColumn: {
            name: 'subject_id',
            referencedColumnName: 'id'
        },
        // Nome da coluna que referencia a tabela de destino Room
        inverseJoinColumn: {
            name: 'room_id',
            referencedColumnName: 'id'
        }
    })
    rooms: Room[]
}