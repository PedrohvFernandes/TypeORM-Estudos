import { CategoryRepository } from '../repositories/CategoryRepository'

type CategoryRequestProps = {
  id: string
  name: string
  description: string
}

export class UpdateCategoryService {
  async execute({ id, name, description }: CategoryRequestProps) {
    if (!id) return new Error('Id not found')

    if(!name && !description) return new Error('Name or description is required')

    const category = await CategoryRepository.findOne({ where: { id } })

    if(!category) return new Error('Category not found')

    if (category) {
      category.name = name ? name : category.name
      category.description = description ? description : category.description
      await CategoryRepository.save(category)
    }

    return category
  }
}
