import { InMemoryVideoRepository } from '@test/repositories/in-memory-video-repository'
import { makeVideo } from '@test/Factories/video-factory'
import { GetAllVideosService } from '../GetAllVideoService'

test('Should be able to get all videos', async () => {
  const inMemoryVideoRepository =
    new InMemoryVideoRepository()

  const getAllVideosService = new GetAllVideosService(
    inMemoryVideoRepository
  )

  const video = makeVideo({
    name: 'Video Test',
    description: 'Video Test Description',
    duration: 10,
    category_id: '123456'
  })

  await inMemoryVideoRepository.create(video)

  const videos = await getAllVideosService.execute()

  expect(videos).toEqual([video])
  expect(videos).toContainEqual(video)
})
