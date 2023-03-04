import { AbstractRepositoriesCategory } from '@infra/http/abstract-repositories/abstract.repositories-category'
import { CategoryRequestProps, ICategory } from '@infra/http/Interfaces/ICategory'
import { AppDataSource } from '../data-source'
import { Category } from '../entities/Category'

// Implementação do repositório de categoria
export class CategoryRepository implements AbstractRepositoriesCategory {
  private CategoryRepository = AppDataSource.getRepository(Category)

  async findOne(id: string): Promise<ICategory | null> {
    const category = await this.CategoryRepository.findOne({ where: { id } })
    return category
  }

  async findOneBy(name: string): Promise<ICategory | null> {
    const category = await this.CategoryRepository.findOneBy({ name })
    return category
  }

  findAll(): Promise<ICategory[]> {
    return this.CategoryRepository.find()
  }

  async create(CategoryRequest: CategoryRequestProps): Promise<void> {
    const categoryCreate = this.CategoryRepository.create(CategoryRequest)

    await this.CategoryRepository.save(categoryCreate)
  }

  async deleteCategoryFindById(id: string): Promise<void> {
    await this.CategoryRepository.delete(id)
  }

  async updateCategoryFindById(category: ICategory): Promise<void> {
    await this.CategoryRepository.save(category)
  }
}
