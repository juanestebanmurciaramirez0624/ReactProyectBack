import express from 'express'
import morgan from 'morgan'
import auhtRoutes from './routes/auth.routes.js'
import userRoutes from './routes/user.routes.js'
import ticketRoutes from './routes/ticket.routes.js'
import serviceRoutes from './routes/service.routes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())
app.use('/api', auhtRoutes)
app.use('/api', userRoutes)
app.use('/api', ticketRoutes)
app.use('/api', serviceRoutes)

export default app