import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { CreateCategories1676641511649 } from './migrations/1676641511649-CreateCategories'
import { CreateVideos1676647041848 } from './migrations/1676647041848-CreateVideos'
import { Video } from '../entities/Video'
import { Category } from '../entities/Category'

const PORT = process.env.DB_PORT as number | undefined

// Arquivo de configuração do TypeORM
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: [Video, Category],
  migrations: [CreateCategories1676641511649, CreateVideos1676647041848] // --> A migration que será executada, version: typeOrm 0.3.12
})
