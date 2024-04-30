import { Router } from 'express'
import taskController from '../controllers/task.controller'

const TaskRoutes = Router()
TaskRoutes.post('/tasks', taskController.create)
TaskRoutes.get('/tasks', taskController.findAll)
TaskRoutes.get('/tasks/:id', taskController.findById)
TaskRoutes.put('/tasks/:id', taskController.update)
TaskRoutes.delete('/tasks/:id', taskController.delete)
TaskRoutes.delete('/tasks/category/:id', taskController.taskByCategory)

export {
    TaskRoutes
}