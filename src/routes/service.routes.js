import { Router } from "express"
import { validateToken } from "../middlewares/validatetoken.js"
import { readServices, readService, createServices, updateServices, deleteServices  } from "../controllers/service.controllers.js"
import { validateSchema } from "../middlewares/validate.middlewares.js"
import { serviceSchema } from "../schemas/service.schema.js"

const router = Router()

router.get('/services', validateToken, readServices )
router.get('/service/:id', validateToken, readService)
router.post('/services', validateToken, validateSchema(serviceSchema), createServices)
router.put('/services/:id', validateToken,validateSchema(serviceSchema), updateServices)
router.delete('/services/:id', validateToken, deleteServices)   

export default router