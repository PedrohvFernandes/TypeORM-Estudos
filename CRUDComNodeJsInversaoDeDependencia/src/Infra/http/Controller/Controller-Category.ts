import { Request, Response } from 'express'
import { CreateCategoryService } from '../services/CreateCategoryService'
import { CategoryRepository } from '@database/repositories/CategoryRepository'
import { DeleteCategoryService } from '../services/DeleteCategoriesService'
import { GetAllCategoriesService } from '../services/GetAllCategoriesService'
import { UpdateCategoryService } from '../services/UpdateCategoryService'

// Aqui vai controlar tudo que é relacionado a categoria, instanciando o service de categoria e o repository de categoria. Passando o repository para o service. E no service ele usa um repository que implementa a classe abstractRepositoriesCategory. Mas que ele não sabe qual repositorio que é, por exemplo pode ser um database ou um mock.
export class ControllerCategory {
  // constructor(private CategoryRepositorDB: CategoryRepository) {}
  // private CategoryRepositorDB: CategoryRepository

  async CreateCategoryController(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { name, description } = request.body

    const CategoryRepositorDB = new CategoryRepository()
    // const result = await new CreateCategoryService(this.CategoryRepositorDB).execute({
    const result = await new CreateCategoryService(CategoryRepositorDB).execute(
      {
        name,
        description
      }
    )

    if (result instanceof Error) {
      return response.status(400).json({ error: result.message })
    }
    return response.status(201).json(result)
  }

  async DeleteCategoryController(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params

    const CategoryRepositorDB = new CategoryRepository()
    const result = await new DeleteCategoryService(CategoryRepositorDB).execute(
      id
    )

    if (result instanceof Error) {
      return response.status(400).json({ error: result.message })
    }

    return response.status(200).json(result)
  }

  async GetAllCategoriesController(
    request: Request,
    response: Response
  ): Promise<Response> {
    const CategoryRepositorDB = new CategoryRepository()

    const result = await new GetAllCategoriesService(
      CategoryRepositorDB
    ).execute()

    if (result instanceof Error) {
      return response.status(400).json({ error: result.message })
    }

    return response.status(200).json({
      categories: result
    })
  }

  async UpdateCategoryController(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params
    const { name, description } = request.body

    const CategoryRepositorDB = new CategoryRepository()
    const result = await new UpdateCategoryService(CategoryRepositorDB).execute(
      {
        id,
        name,
        description
      }
    )

    if (result instanceof Error) {
      return response.status(400).json({ error: result.message })
    }

    return response.status(200).json(result)
  }
}
