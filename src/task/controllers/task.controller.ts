import { Request, Response } from 'express'
import taskService from '../services/task.service' 

class taskController {
    async create(req: Request, res: Response) {
        const createdTask = await taskService.create(req.body)
        res.status(201)
        return res.json(createdTask)
    }

    async findAll(req: Request, res: Response) {
        const foundTasks = await taskService.findAll()
        res.status(200)
        return res.json(foundTasks)
    }

    async findById(req: Request, res: Response) {
        const foundTask = await taskService.findById(req.params.id)
        res.status(200)
        return res.json(foundTask)
    }

    async update(req: Request, res: Response) {
        const updatedTask = await taskService.update(req.params.id, req.body)
        res.status(200)
        return res.json(updatedTask)
    }

    async delete(req: Request, res: Response) {
        const deleted = await taskService.delete(req.params.id)
        res.status(200)
        return res.json(deleted)
    }

    async taskByCategory(req: Request, res: Response) {
        const taskByCategoryFound = await taskService.findAll()
        res.status(200)
        return res.json(taskByCategoryFound)
    }
}

export default new taskController();

