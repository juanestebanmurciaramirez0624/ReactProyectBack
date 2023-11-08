import mongoose, { Schema } from "mongoose"

const seriveShema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: [String],
        required: true,
        enum: ['Tecnologia','Salud','Educación']
    },
    price: {
        type: Schema.Types.Decimal128,
        required: true,
    }
}, {
    timestamps: true
}
)

export default mongoose.model('Service', seriveShema)