import { CreateCategoryService } from '../CreateCategoryService'
import { InMemoryCategoryRepository } from '@test/repositories/in-memory-category-repository'

import { makeCategory } from '@test/Factories/category-factory'

test('Should be able to create a new category', async () => {
  const inMemoryCategoryRepository =
    new InMemoryCategoryRepository()

  const createCategoryService = new CreateCategoryService(
    inMemoryCategoryRepository
  )

  const category = await createCategoryService.execute(
    makeCategory({
      name: 'Category Test',
      description: 'Category Test Description'
    })
  )

  if (category instanceof Error) {
    throw new Error(category.message)
  }

  expect(inMemoryCategoryRepository.categories).toEqual([category])
})
