import User from '../entities/User'
import IUserProps from '../interfaces/IUser'
import { AppDataSource } from '../../database/data-source'

const UserRepository = AppDataSource.getRepository(User)

const getUsers = async (): Promise<IUserProps[]> => {
  return await UserRepository.find()
}

export default { getUsers }
