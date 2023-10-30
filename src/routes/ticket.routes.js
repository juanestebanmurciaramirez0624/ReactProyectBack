import { Router } from "express"
import { validateToken } from "../middlewares/validatetoken.js"
import { readTickets, readTicket, createTickets, updateTickets, deleteTickets  } from "../controllers/ticket.controllers.js"
import { validateSchema } from "../middlewares/validate.middlewares.js"
import { ticketSchema } from "../schemas/ticket.schema.js"

const router = Router()

router.get('/tickets', validateToken, readTickets )
router.get('/ticket/:id', validateToken, readTicket)
router.post('/tickets', validateToken, validateSchema(ticketSchema), createTickets)
router.put('/tickets/:id', validateToken, validateSchema(ticketSchema), updateTickets)
router.delete('/tickets/:id', validateToken, deleteTickets)   

export default router