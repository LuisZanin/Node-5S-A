import express from 'express'
import mongoose from 'mongoose'
import { UserRoutes } from '../src/user/routes/user.routes'
import { TaskRoutes } from '../src/task/routes/task.routes'
import { CategoryRoutes } from '../src/category/routes/category.routes'

class App {
    public express: express.Application

    constructor() {
        this.express = express()
        this.middleware()
        this.database()
        this.routes()
    }

    public middleware() {
        this.express.use(express.json())
    }

    public async database() {
        try {
            await mongoose.connect('mongodb://127.0.0.1:27017/Task-Manager');
            console.log('Conectado com a base de dados')
        } catch (error) {
            console.error("Erro ao conectar com a base de dados:", error)
        }
    }

    public routes() {
        this.express.use(UserRoutes)
        this.express.use(TaskRoutes)
        this.express.use(CategoryRoutes)
    }
}
export default new App().express