import { Router } from "express"
import { validateToken } from "../middlewares/validatetoken.js"
import { readUsers, readUser, updateUsers, deleteUsers  } from "../controllers/user.controllers.js"
import { validateSchema } from "../middlewares/validate.middlewares.js"
import { registerSchema } from "../schemas/auth.schema.js"

const router = Router()

router.get('/users', validateToken, readUsers )
router.get('/user/:id', validateToken, readUser)
router.put('/users/:id', validateToken, updateUsers)
router.delete('/users/:id', validateToken, deleteUsers)   

export default router