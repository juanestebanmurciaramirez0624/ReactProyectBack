import { Router } from "express"
import {login, register, logout, profile, verifyToken} from '../controllers/auth.controllers.js'
import { validateToken } from "../middlewares/validatetoken.js"
import { validateSchema } from "../middlewares/validate.middlewares.js"
import { registerSchema, loginSchema } from "../schemas/auth.schema.js"

const router = Router()

router.post('/register', validateSchema(registerSchema), register)
router.post('/login', validateSchema(loginSchema), login)
router.post('/logout', logout)
router.get('/profile', validateToken, profile)
router.get('/verify', verifyToken)

export default router