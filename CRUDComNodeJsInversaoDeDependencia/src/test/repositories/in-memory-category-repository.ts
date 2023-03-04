import { ICategory } from '@infra/http/Interfaces/ICategory'
import { AbstractRepositoriesCategory } from '@infra/http/abstract-repositories/abstract.repositories-category'

export class InMemoryCategoryRepository
  implements AbstractRepositoriesCategory
{
  public categories: ICategory[] = []

  async findOne(id: string): Promise<ICategory | null> {
    const category = this.categories.find(category => category.id === id)
    if (!category) {
      return null
    }
    // return new Promise(resolve => resolve(category)) --> caso não passe o async na função
    return category
  }

  async findOneBy(name: string): Promise<ICategory | null> {
    const category = this.categories.find(category => category.name === name)

    if (!category) {
      return null
    }

    return category
  }

  async findAll(): Promise<ICategory[]> {
    return this.categories
  }

  async create(category: ICategory): Promise<void> {
    this.categories.push(category)
  }

  async deleteCategoryFindById(id: string): Promise<void> {
    const index = Number(id)
    this.categories.splice(index, 1)
  }

  async updateCategoryFindById(category: ICategory): Promise<void> {
    const index = this.categories.findIndex(
      categoryIndex => categoryIndex.id === category.id
    )
    this.categories[index] = category
  }
}
