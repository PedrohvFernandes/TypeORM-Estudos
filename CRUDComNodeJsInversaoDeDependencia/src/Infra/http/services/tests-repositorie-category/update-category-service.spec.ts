import { InMemoryCategoryRepository } from '@test/repositories/in-memory-category-repository'
import { makeCategory } from '@test/Factories/category-factory'
import { UpdateCategoryService } from '../UpdateCategoryService'

test('Should be able to update a category', async () => {
  const inMemoryCategoryRepository =
    new InMemoryCategoryRepository()
  const updateCategoryService = new UpdateCategoryService(
    inMemoryCategoryRepository
  )

  const category = makeCategory({
    name: 'Category Test',
    description: 'Category Test Description'
  })

  await inMemoryCategoryRepository.create(category)

  const categoryUpdated = await updateCategoryService.execute({
    id: category.id,
    name: 'Category Test Updated',
    description: 'Category Test Description Updated'
  })

  if (categoryUpdated instanceof Error) {
    throw new Error(categoryUpdated.message)
  }

  expect(categoryUpdated).toEqual({
    id: category.id,
    name: 'Category Test Updated',
    description: 'Category Test Description Updated',
    created_at: category.created_at,
  })

  expect(inMemoryCategoryRepository.categories).toContainEqual(
    categoryUpdated
  )
})
