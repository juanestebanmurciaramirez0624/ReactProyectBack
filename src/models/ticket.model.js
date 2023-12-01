import mongoose from "mongoose"

const ticketShema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    subject: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    state: {
        type: [String],
        required: true,
        enum: ['Respondido', 'No Respondido'],
        default: 'No Respondido'
    },
    date:{
        type: Date,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    service:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Service",
        required: true
    }
}, {
    timestamps: true
}
)

export default mongoose.model('Ticket', ticketShema)
