import { Request, Router, Response } from 'express'
import User from '../entities/User'
import UserRepository from '../repositories/UserRepository'
import IUserProps from '../interfaces/IUser'

const userRouter = Router()

userRouter.get('/', async (_request: Request, response: Response): Promise<Response> => {
  const users = await UserRepository.getUsers()
  return response.status(200).json(users)
})

export default userRouter