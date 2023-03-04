import { Router } from 'express'
import { ControllerCategory } from '@infra/http/Controller/Controller-Category'
import { ControllerVideo } from '@infra/http/Controller/Controller-Video'

export const routes = Router()

routes.post('/categories', new ControllerCategory().CreateCategoryController)
routes.delete('/categories/:id', new ControllerCategory().DeleteCategoryController)
routes.get('/categories', new ControllerCategory().GetAllCategoriesController)
routes.put('/categories/:id', new ControllerCategory().UpdateCategoryController)

routes.post('/videos', new ControllerVideo().CreateVideoController)
routes.get('/videos', new ControllerVideo().GetAllVideosController)