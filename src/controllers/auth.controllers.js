import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import {createAccesToken} from '../libs/jwt.js'
import { TOKEN_SECRET } from '../config.js'
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
    const {fullName, documentType, documentNumber, email, password} = req.body
    try {
        const passwordHash = await bcrypt.hash(password, 10)
        const newUser = new User({
            fullName,
            documentType,
            documentNumber,
            email,
            password: passwordHash,
        })

        const saveUser = await newUser.save()
        const token = await createAccesToken({id: saveUser._id})
        res.cookie('token', token)
        res.json({
            id: saveUser._id,
            fullName: saveUser.fullName,
            documentType: saveUser.documentType,
            documentNumber: saveUser.documentNumber,
            birthDate: saveUser.birthDate,
            email: saveUser.email,
            createAt: saveUser.createdAt,
            updateAt: saveUser.updatedAt,
            ticket: saveUser.ticket
        })

    } catch (error) {
        res.status(500).json({
            msg: "Usuario no encontrado"
        })
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body
    try {

        const userFound = await User.findOne({email})

        if(!userFound) return res.status(400).json(["Usuario no encontrado"])
        
        const isMatch = await bcrypt.compare(password, userFound.password)

        if(!isMatch) return res.status(400).json({
            msg: "Contraseña incorrecta"
        })

        const token = await createAccesToken({id: userFound._id})
        res.cookie('token', token)
        res.json({
            id: userFound._id,
            fullName: userFound.fullName,
            documentType: userFound.documentType,
            documentNumber: userFound.documentNumber,
            birthDate: userFound.birthDate,
            email: userFound.email,
            createAt: userFound.createdAt,
            updateAt: userFound.updatedAt,
            ticket: userFound.ticket
        })
    } catch (error) {
        res.status(500).json({
            msg: error.msg
        })
    }
}

export const logout = (req, res) => {
    res.cookie('token', "", {
        expires: new Date(0)
    })
    return res.sendStaus(200)
}

export const profile = async (req, res) => {
    const userFound = await User.findById(req.user)
    if(!userFound) return res.status(400).json({
        msg: "Usuario no encontrado"
    })

    return res.json({
        id: userFound._id,
        fullName: userFound.fullName,
        email: userFound.email,
        createAt: userFound.createdAt,
        updateAt: userFound.updatedAt,
    })
}

export const verifyToken = async (req, res) => {
    const {token} = req.cookies

    if(!token) return res.status(401).json({
        msg: "No se Autentico"
    })

    jwt.verify(token, TOKEN_SECRET, async (error, user) => {
        if(error) return res.status(401).json({
            msg: "No se Autentico"
        })

        const userFound = await User.findById(user.id)
        if(!userFound) return res.status(401).json({
            msg: "No se Autentico"
        })

        return res.json({
            id: userFound._id,
            fullName: userFound.fullName,
            email: userFound.email
        })
    })
}