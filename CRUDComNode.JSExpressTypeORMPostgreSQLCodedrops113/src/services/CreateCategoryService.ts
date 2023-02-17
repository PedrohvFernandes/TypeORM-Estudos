import { Category } from '../entities/Category'
import { CategoryRepository } from '../repositories/CategoryRepository'

type CategoryRequestProps = {
  name: string
  description: string
}

export class CreateCategoryService {
  async execute({
    name,
    description
  }: CategoryRequestProps): Promise<Category | Error> {
    if (await CategoryRepository.findOneBy({ name })) {
      return new Error('Category already exists')
    }

    if (!name) {
      throw new Error('Name is required')
    }

    if (!description) {
      throw new Error('Description is required')
    }

    const category = CategoryRepository.create({
      name,
      description
    })

    await CategoryRepository.save(category)

    return category
  }
}
