import { Router } from 'express'
import userController from '../controllers/user.controller'

const UserRoutes = Router()
UserRoutes.post('/users', userController.create)
UserRoutes.get('/users', userController.findAll)
UserRoutes.get('/users/:id', userController.findById)
UserRoutes.put('/users/:id', userController.update)
UserRoutes.delete('/users/:id', userController.delete)


export {
    UserRoutes
}