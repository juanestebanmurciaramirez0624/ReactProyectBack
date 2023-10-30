import {z} from 'zod'

export const ticketSchema = z.object({
    name: z.string({
        required_error: "El nombre del ticket requerido"
    }),
    description: z.string({
        required_error: "La description es requerido"
    })
})