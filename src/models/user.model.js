    import mongoose from "mongoose"

    const userShema = new mongoose.Schema({
        fullName: {
            type: String,
            required: true,
            trim: true
        },
        documentType: {
            type: [String],
            required: true,
            enum: ['T.I', 'C.C', 'C.E', 'Pasaporte']
        },
        documentNumber: {
            type: Number,
            required: true,
            unique: true,
            maxlength: 10
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
        rol: {
            type: [String],
            required: true,
            enum: ['Cliente', 'Administrador', 'Empleado']
        }}, {
        timestamps: true
    }
    )

    export default mongoose.model('User', userShema)