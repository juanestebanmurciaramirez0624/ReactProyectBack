import User from '../models/user.model.js'
import mongoose from "mongoose"

export const readUsers = async (req, res) =>{
    const user = await User.find()
    res.json(user)
}

export const readUser = async (req, res) =>{
    const user = await User.findById(req.params.id)
    if(!user) return res.status(404).json({
        msg: `El usuario ${user} no encontrado`
    })

    res.json(user)
}

export const updateUsers = async (req, res) =>{
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    if(!user) return res.status(404).json({
        msg: `El usuario ${user} no encontrado`
    })

    res.json(user)
}

export const deleteUsers = async (req, res) =>{
    const user = await User.findByIdAndDelete(req.params.id)
    if(!user) return res.status(404).json({
        msg: `El usuario ${user.name} no encontrado`
    })

    res.status(200).json({
        msg: `El usuario ${user.name} fue eliminado correctamente`
    })
}


