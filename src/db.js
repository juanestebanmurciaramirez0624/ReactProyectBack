import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/serviPlus', /*{
            //Para ejecutar en clase
            autoIndex: true,
            family: 4
        */)
        console.log('DBconnect')
    } catch (error) {
        console.log(error)
    }
}