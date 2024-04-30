import userSchema from '../schemas/user.schema'
import { userType } from '../types/user.entities'

class userService {

    async create(user: userType) {
        const createdUser = await userSchema.create(user)
        return createdUser
    }

    async findAll() {
        const foundUsers = await userSchema.find()
        return foundUsers
    }

    async findById(id: string) {
        const foundUser = await userSchema.findById(id)
        return foundUser
    }

    async update(id: string, user: userType) {
        const updatedUser = await userSchema.findByIdAndUpdate(id, {
            name: user.name,
            weight: user.weight,
            password: user.password,
            email: user.email
        }, { new: true })

        return updatedUser
    }

    async delete(id: string) {
        try {
            await userSchema.findByIdAndDelete(id)
            return "Usuário removido com sucesso"
        } catch (error) {
            throw new Error(`Ocorreu um erro ao remover o Usuário: ${error}`)
        }
    }

}


export default new userService()