import mongoose from "mongoose"

const ticketShema = new mongoose.Schema({
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
    service:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Service",
        //required: true
    }
}, {
    timestamps: true
}
)

export default mongoose.model('Ticket', ticketShema)
