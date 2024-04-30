import categorySchema from '../schemas/category.schema'
import { categoryType } from '../types/category.entities'

class categoryService {

    async create(user: categoryType) {
        const createdCategory = await categorySchema.create(user)
        return createdCategory
    }

    async findAll() {
        const foundCategories = await categorySchema.find()
        return foundCategories
    }

    async findById(id: string) {
        const foundCategory = await categorySchema.findById(id)
        return foundCategory
    }

    async update(id: string, category: categoryType) {
        const updatedCategory = await categorySchema.findByIdAndUpdate(id, {
            name: category.name,
            color: category.color
        }, { new: true })

        return updatedCategory
    }

    async delete(id: string) {
        try {
            await categorySchema.findByIdAndDelete(id)
            return "Usuário removido com sucesso"
        } catch (error) {
            throw new Error(`Ocorreu um erro ao remover o Usuário: ${error}`)
        }
    }

}


export default new categoryService()