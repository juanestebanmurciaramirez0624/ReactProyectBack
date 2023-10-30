    import mongoose from "mongoose"

    const userShema = new mongoose.Schema({
        fullName: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        password: {
            type: String,
            required: true
        },
        ticket:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ticket'
        }
    }, {
        timestamps: true
    }
    )

    export default mongoose.model('User', userShema)