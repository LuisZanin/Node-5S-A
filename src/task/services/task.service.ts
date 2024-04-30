import taskSchema from '../schemas/task.schema' 
import { taskType } from '../types/task.entities'

class taskService {

    async create(task: taskType) {
        const createdTask = await taskSchema.create(task)
        return createdTask
    }

    async findAll() {
        const foundTasks = await taskSchema.find()
        return foundTasks
    }

    async findById(id: string) {
        const foundTask = await taskSchema.findById(id)
        return foundTask
    }

    async update(id: string, task: taskType) {
        const updatedTask = await taskSchema.findByIdAndUpdate(id, {
            name: task.name,
            description: task.description,
            created_at: task.created_at,
            concluded_at: task.concluded_at,
            type: task.type,
            category: task.category,
            status: task.status,
            associated_user: task.associated_user
        }, { new: true })

        return updatedTask
    }

    async delete(id: string) {
        try {
            await taskSchema.findByIdAndDelete(id)
            return "Task removida com sucesso"
        } catch (error) {
            throw new Error(`Ocorreu um erro ao remover a task: ${error}`)
        }
    }


    async taskByCategory(id: string) {
        try {
            await taskSchema.find({category: id})
        } catch (error) {
            throw new Error(`Ocorreu um erro ao Filtrar por categoria: ${error}`)
        }
    }


}


export default new taskService()