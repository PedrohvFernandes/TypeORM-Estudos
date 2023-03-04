import { AbstractRepositoriesCategory } from '../../http/abstract-repositories/abstract.repositories-category'
import { CategoriesLengthNotFound } from '../Error/CategoriesLengthNotFound'
import { CategoryNotFound } from '../Error/CategoryNotFound'
import { ICategory } from '../Interfaces/ICategory'

export class GetAllCategoriesService {
  constructor(private CategoryRepository: AbstractRepositoriesCategory) {}
  async execute(): Promise<ICategory[] | Error> {

    const categories = await this.CategoryRepository.findAll()

    if (!categories) return new CategoryNotFound()
    if (categories.length === 0) return new CategoriesLengthNotFound()
    // if (categories.length > 0) return `Categories found: ${categories.length}`

    return categories
  }
}
