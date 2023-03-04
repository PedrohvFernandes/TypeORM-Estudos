import { AbstractRepositoriesCategory } from '../abstract-repositories/abstract.repositories-category'
import { CategoryIdNotFound } from '../Error/CategoryIdNotFound'
import { CategoryNotFound } from '../Error/CategoryNotFound'
import { NameOrDescriptionIsRequired } from '../Error/NameOrDescriptionIsRequired'
import { ICategory } from '../Interfaces/ICategory'

type CategoryRequestProps = {
  id: string
  name: string
  description: string
}

export class UpdateCategoryService {
  constructor(private CategoryRepository: AbstractRepositoriesCategory) {}

  async execute({ id, name, description }: CategoryRequestProps): Promise<ICategory | Error> {
    if (!id) return new CategoryIdNotFound()

    if(!name && !description) return new NameOrDescriptionIsRequired()

    const categoryAlreadyExists = await this.CategoryRepository.findOne(id)

    if(!categoryAlreadyExists) return new CategoryNotFound()

    if (categoryAlreadyExists) {
      categoryAlreadyExists.name = name ? name : categoryAlreadyExists.name
      categoryAlreadyExists.description = description ? description : categoryAlreadyExists.description
      await this.CategoryRepository.updateCategoryFindById(categoryAlreadyExists)
      // await CategoryRepository.save(category)
    }
    return categoryAlreadyExists
  }
}
