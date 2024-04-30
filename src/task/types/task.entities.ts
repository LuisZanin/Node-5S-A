import { statusOptions } from "../schemas/task.schema"

export interface taskType {
    name: String,
    description: String,
    created_at: Date,
    concluded_at: Date,
    type: String,
    category: String,
    status: typeof statusOptions,
    associated_user: String
}

