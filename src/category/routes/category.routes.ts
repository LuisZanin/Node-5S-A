import { Router } from 'express'
import categoryController from '../controllers/category.controller'

const CategoryRoutes = Router()
CategoryRoutes.post('/categories', categoryController.create)
CategoryRoutes.get('/categories', categoryController.findAll)
CategoryRoutes.get('/categories/:id', categoryController.findById)
CategoryRoutes.put('/categories/:id', categoryController.update)
CategoryRoutes.delete('/categories/:id', categoryController.delete)


export {
    CategoryRoutes
}