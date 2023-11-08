import jwt from 'jsonwebtoken'
import {TOKEN_SECRET} from '../config.js'

export const validateToken = (req, res, next) =>{
    const {token} = req.cookies
    if(!token) return res.status(401).json({
        msg: "Autorizacion denegada"
    })

    jwt.verify(token, TOKEN_SECRET, (error, user) =>{
        if(error) return res.status(401).json({
            msg: "Token no valido" 
        })
        req.user = user.id
        next()
    })
}