import { Router } from 'express'
import { CreateCategoryController } from './Controller/CreateCategoryController'
import { CreateVideoController } from './Controller/CreateVideoController'
import { DeleteCategoryController } from './Controller/DeleteCategoryController'
import { GetAllCategoriesController } from './Controller/GetAllCategoriesController'
import { GetAllVideosController } from './Controller/GetAllVideosController'
import { UpdateCategoryController } from './Controller/UpdateCategoryController'

export const routes = Router()

routes.post('/categories', new CreateCategoryController().handle)
routes.get('/categories', new GetAllCategoriesController().handle)
routes.delete('/categories/:id', new DeleteCategoryController().handle)
routes.put('/categories/:id', new UpdateCategoryController().handle)

routes.post('/videos', new CreateVideoController().handle)
routes.get('/videos', new GetAllVideosController().handle)