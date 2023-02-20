import { Router } from 'express'
import userRouter from '../controllers/UserController'

const routes = Router()

routes.use('/users', userRouter)

export default routes