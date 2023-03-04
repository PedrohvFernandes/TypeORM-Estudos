import { AbstractRepositoriesCategory } from '../abstract-repositories/abstract.repositories-category'
import { CategoryAlreadyExists } from '../Error/CategoryAlreadyExists'
import { DescriptionIsRequired } from '../Error/DescriptionIsRequired'
import { NameIsRequired } from '../Error/NameIsRequired'
import { ICategory, CategoryRequestProps } from '../Interfaces/ICategory'

export class CreateCategoryService {
  // Aqui eu recebo o repository de categoria, que pode ser um database ou um mock.
  constructor(private CategoryRepository: AbstractRepositoriesCategory) {}

  async execute(CategoryRequest: CategoryRequestProps): Promise<ICategory | Error | null> {
    const categoryAlreadyExists = await this.CategoryRepository.findOneBy(CategoryRequest.name)

    if (categoryAlreadyExists !== null) {
      return new CategoryAlreadyExists()
    }

    if (!CategoryRequest.name) {
      return new NameIsRequired()
    }

    if (!CategoryRequest.description) {
      return new DescriptionIsRequired()
    }

    await this.CategoryRepository.create(CategoryRequest)

    // Essa parte do save não fica mais responsavel aqui, quem fica responsavel por salvar é o repository, pois so ele conhece a forma de salvar. Aqui so recebemos uma abstração de um repository.
    // await CategoryRepository.save(category)
    return await this.CategoryRepository.findOneBy(CategoryRequest.name)
  }
}
