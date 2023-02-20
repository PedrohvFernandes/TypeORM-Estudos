import express from 'express'
import cors from 'cors'
import { AppDataSource } from './database/data-source'
import routes from './app/routes/routes'

const app = express()

app.use(cors())
app.use(express.json())

app.use(routes)

AppDataSource.initialize().then(() => {
  const PORT = process.env.PORT || 3000

  app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })
})
