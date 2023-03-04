import { CategoryRequestProps, ICategory } from '../Interfaces/ICategory'

// Essa asbtração vai servir para que eu possa criar um mock de um repository, para que eu possa testar o controller sem precisar de um banco de dados.
// Em service voce vai usar um repositorie que implemente essa classe abstract repositorie aqui
export abstract class AbstractRepositoriesCategory {
  abstract findOne(id: string): Promise<ICategory | null>
  abstract findOneBy(name: string): Promise<ICategory | null>
  abstract findAll(): Promise<ICategory[]>
  abstract create(CategoryRequest: CategoryRequestProps): Promise<void>
  abstract deleteCategoryFindById(id: string): Promise<void>
  abstract updateCategoryFindById(category: ICategory): Promise<void>
}
