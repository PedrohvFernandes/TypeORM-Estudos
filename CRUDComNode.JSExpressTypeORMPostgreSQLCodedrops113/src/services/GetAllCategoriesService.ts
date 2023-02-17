import { CategoryRepository } from '../repositories/CategoryRepository'

export class GetAllCategoriesService {
  async execute() {
    const categories = await CategoryRepository.find()
    if (!categories) return new Error('Categories not found')
    if (categories.length === 0) return new Error('Categories not found')
    // if (categories.length > 0) return `Categories found: ${categories.length}`

    return categories
  }
}
