import { CreateVideoService } from '../CreateVideoService'
import { InMemoryVideoRepository } from '@test/repositories/in-memory-video-repository'
import { InMemoryCategoryRepository } from '@test/repositories/in-memory-category-repository'
import { makeVideo } from '@test/Factories/video-factory'
import { makeCategory } from '@test/Factories/category-factory'

test('Should be able to create a new video', async () => {
  const inMemoryVideoRepository = new InMemoryVideoRepository()

  const inMemoryCategoryRepository = new InMemoryCategoryRepository()

  const createVideoService = new CreateVideoService(
    inMemoryVideoRepository,
    inMemoryCategoryRepository
  )

  const category = makeCategory({
    name: 'Category Test',
    description: 'Category Test Description'
  })

  await inMemoryCategoryRepository.create(category)

  const video = makeVideo({
    name: 'Video Test',
    description: 'Video Test Description',
    duration: 10,
    category_id: category.id
  })

  await createVideoService.execute(video)

  if (video instanceof Error) {
    throw new Error(video.message)
  }

  expect(inMemoryVideoRepository.videos).toEqual([video])
  expect(inMemoryVideoRepository.videos).toContainEqual(video)
  expect(video.category_id).toEqual(category.id)
  expect(inMemoryVideoRepository.videos[0].category_id).toEqual(category.id)
  expect(inMemoryVideoRepository.videos[0].category_id).toEqual(
    video.category_id
  )
  expect(inMemoryCategoryRepository.categories[0].id).toEqual(video.category_id)
})
