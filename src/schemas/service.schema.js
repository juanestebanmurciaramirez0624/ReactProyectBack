import {z} from 'zod'

export const serviceSchema = z.object({
    name: z.string({
        required_error: "El nombre del servicio es requerido"
    }),
    description: z.string({
        required_error: "la descripcion del servicio es requerida"
    })
})