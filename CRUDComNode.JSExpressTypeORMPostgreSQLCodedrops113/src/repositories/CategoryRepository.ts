import { AppDataSource } from '../database/data-source'
import { Category } from '../entities/Category'

export const CategoryRepository = AppDataSource.getRepository(Category)
