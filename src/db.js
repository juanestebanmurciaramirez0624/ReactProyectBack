import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/serviPlus')
        console.log('DBconnect')
    } catch (error) {
        console.log(error)
    }
}