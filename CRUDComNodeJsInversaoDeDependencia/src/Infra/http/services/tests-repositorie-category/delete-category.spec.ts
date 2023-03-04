import { DeleteCategoryService } from '../DeleteCategoriesService'
import { InMemoryCategoryRepository } from '@test/repositories/in-memory-category-repository'
import { makeCategory } from '@test/Factories/category-factory'

test('Should be able to delete a category', async () => {
  const inMemoryCategoryRepository =
    new InMemoryCategoryRepository()
  const deleteCategoryService = new DeleteCategoryService(
    inMemoryCategoryRepository
  )

  const category = makeCategory({
    name: 'Category Test',
    description: 'Category Test Description'
  })

  await inMemoryCategoryRepository.create(category)

  const deleteCategory = await deleteCategoryService.execute(category.id)

  if (deleteCategory instanceof Error) {
    throw new Error(deleteCategory.message)
  }

  expect(inMemoryCategoryRepository.categories).toEqual([])
  expect(inMemoryCategoryRepository.categories.length).toBe(0)
  expect(inMemoryCategoryRepository.categories).not.toContain(
    category
  )
})
