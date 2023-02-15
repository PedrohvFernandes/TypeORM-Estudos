import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Subject } from './entities/Subject'
import { Room } from './entities/Room'
import { Video } from './entities/Video'

const PORT = process.env.DB_PORT as number | undefined

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  
  // __Diraname é uma variável global que retorna o caminho do arquivo atual. _dirname é uma variável de ambiente que informa o caminho absoluto do diretório que contém o arquivo em execução no momento. Nesse caso é o database
  // entities: [`${__dirname}/**/entities/*.{ts,js}`], //  Version typeOrm --> 0.3.7
  // entities: [`./src/database/entities/*.{ts,js}`], // Version typeOrm --> 0.3.7

  entities: [Room, Video, Subject], // Version typeOrm --> 0.3.12 and 0.3.7
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`],// Version typeOrm --> 0.3.7
})