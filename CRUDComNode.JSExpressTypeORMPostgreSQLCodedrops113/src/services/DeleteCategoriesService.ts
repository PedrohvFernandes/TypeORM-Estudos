import { CategoryRepository } from '../repositories/CategoryRepository'

export class DeleteCategoryService {
  async execute(id: string) {
    if (!id) return new Error('Id not found')

    if (!(await CategoryRepository.findOne({ where: { id } }))) {
      return new Error('Category not found')
    }

    await CategoryRepository.delete(id)
  }
}
