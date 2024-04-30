import { Schema, model } from 'mongoose'

const statusOptions = Object.freeze({
    1: "Pendente",
    2: "Em Atendimento",
    3: "Concluída"
})

const taskSchema = new Schema({
    name: String,
    description: String,
    created_at: Date,
    concluded_at: Date,
    type: String,
    category: String,
    status: {
        type: Number,
        enum: Object.keys(statusOptions).map(key => parseInt(key))
    },
    associated_user: String
}, {
    timestamps: true
});

export { statusOptions }
export default model("Task", taskSchema);






