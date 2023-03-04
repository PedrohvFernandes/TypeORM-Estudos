import { AbstractRepositoriesCategory } from '../abstract-repositories/abstract.repositories-category'
import { CategoryIdNotFound } from '../Error/CategoryIdNotFound'
import { CategoryNotFound } from '../Error/CategoryNotFound'
import { ICategory } from '../Interfaces/ICategory'

export class DeleteCategoryService {
  constructor(private CategoryRepository: AbstractRepositoriesCategory) {}

  async execute(id: string): Promise<ICategory | Error> {
    if (!id) return new CategoryIdNotFound()

    const categoryAlreadyExists = await this.CategoryRepository.findOne(id)

    if (categoryAlreadyExists === null) {
      return new CategoryNotFound()
    }

    await this.CategoryRepository.deleteCategoryFindById(id)

    // Vai ser feito na camada de repo
    // await CategoryRepository.delete(id)

    return categoryAlreadyExists
  }
}
