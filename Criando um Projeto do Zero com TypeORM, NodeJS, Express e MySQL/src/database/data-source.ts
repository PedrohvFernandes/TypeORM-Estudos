import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from 'typeorm'
import {
  CreateUsersTable1676857026031,
  alteracaoCampoEmailLength1001676858367251
} from './migrations'

import User from '../app/entities/User'

const { DB_USER, DB_PASS, DB_NAME, DB_PORT, DB_HOST } = process.env
const PORT = DB_PORT as number | undefined

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: DB_HOST,
  port: PORT,
  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [
    CreateUsersTable1676857026031,
    alteracaoCampoEmailLength1001676858367251
  ],
  subscribers: []
})
