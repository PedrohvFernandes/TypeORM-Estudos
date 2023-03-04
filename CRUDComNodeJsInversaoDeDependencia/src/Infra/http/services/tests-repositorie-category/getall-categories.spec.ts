// Cada teste desse é como se fosse o controller, que chama o service, que chama o repository.
// Então toda regra de negocio continua pra cada service e repository, e o controller só chama o service e o service chama o repository.
import { InMemoryCategoryRepository } from '@test/repositories/in-memory-category-repository'

import { makeCategory } from '@test/Factories/category-factory'
import { GetAllCategoriesService } from '../GetAllCategoriesService'

test('Should return a list of categories', async () => {
  const inMemoryCategoryRepository =
    new InMemoryCategoryRepository()
  const getAllCategoryService = new GetAllCategoriesService(
    inMemoryCategoryRepository
  )

  await inMemoryCategoryRepository.create(
    makeCategory({
      name: 'Category 1',
      description: 'Category 1 description1'
    })
  )

  await inMemoryCategoryRepository.create(
    makeCategory({
      name: 'Category 2',
      description: 'Category 2 description2'
    })
  )

  await inMemoryCategoryRepository.create(
    makeCategory({
      name: 'Category 3',
      description: 'Category 3 description3'
    })
  )

  const categories = await getAllCategoryService.execute()

  if (categories instanceof Error) {
    throw new Error(categories.message)
  }

  expect(inMemoryCategoryRepository.categories).toHaveLength(3)
  expect(inMemoryCategoryRepository.categories[0]).toEqual(
    categories[0]
  )
})
