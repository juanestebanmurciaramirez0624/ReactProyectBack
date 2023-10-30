import mongoose from "mongoose"

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
    }
}, {
    timestamps: true
}
)

export default mongoose.model('Service', seriveShema)