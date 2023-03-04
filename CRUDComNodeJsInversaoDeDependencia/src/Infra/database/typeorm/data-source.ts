import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { ENTITIES } from './entities'
import { MIGRATION } from './migrations'

const PORT = process.env.DB_PORT as number | undefined

// Arquivo de configuração do TypeORM
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true, // --> usar somente em hambiente de dev, porque ela pode limpar a tabela do banco
  logging: true,
  // entities: [ENTITIES.Category, ENTITIES.Video],
  entities: ENTITIES,
  migrations: [MIGRATION.CreateCategories1676641511649, MIGRATION.CreateVideos1676647041848] // --> A migration que será executada, version: typeOrm 0.3.12
})
