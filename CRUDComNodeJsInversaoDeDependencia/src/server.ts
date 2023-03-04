import express from 'express'
import cors from 'cors'
import 'reflect-metadata'

import { AppDataSource } from '@infra/database/typeorm/data-source'
import { routes } from "./routes";

AppDataSource.initialize().then(() => {
  const app = express()

  app.use(cors())

  app.use(express.json())

  app.use(routes);
  
  const PORT = process.env.PORT || 3000

  app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })
})