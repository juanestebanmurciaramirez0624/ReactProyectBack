import {z} from 'zod'

export const registerSchema = z.object({
    fullName: z.string({
        required_error: "El nombre es requerido"
    }),
    email: z.string({
        required_error: "El correo electroncio es requerido"
    }).email({
        required_error: "Formato invalido"
    }),
    password: z.string({
        required_error: "La contraseña es requerida"
    }).min(6,{
        required_error: "La contraseña requiere de al menos 6 caracteres"
    })
})

export const loginSchema = z.object({
    email: z.string({
        required_error: "El correo electronico es requerido"
    }).email({
        required_error: "Formato invalido"
    }),
    password: z.string({
        required_error: "La contraseña es requerida"
    }).min(6, {
        required_error: "La contraseña requiere de almenos 6 caracteres"
    })
})