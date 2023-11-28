import User from '../models/user.model.js'

export const readUsers = async (req, res) =>{
    try {
        const user = await User.find()
        res.json(user)
    } catch (error) {
        return res.status(404).json({
            message: "Usuario no encontrado"
        })
    }
}

export const readUser = async (req, res) =>{
    try {
        const user = await User.findById(req.params.id)
        if(!user) return res.status(404).json({
            msg: `El usuario ${user} no encontrado`
        })
        res.json(user)
    } catch (error) {
        return res.status(404).json({
            message: "Usuario no encontrado"
        })
    }
}

export const updateUsers = async (req, res) =>{
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        if(!user) return res.status(404).json({
            msg: `El usuario ${user} no fue encontrado`
        })
        res.status(201).json({
            msg: `El usuario ${user.fullName} fue actualizado correctamente`
        })    } catch (error) {
        return res.status(404).json({
            message: "Usuario no encontrado"
        })
    }
}

export const deleteUsers = async (req, res) =>{
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if(!user) return res.status(404).json({
            msg: `El usuario ${user.name} no encontrado`
        })
    
        res.status(200).json({
            msg: `El usuario ${user.fullName} fue eliminado correctamente`
        })
    } catch (error) {
        return res.status(404).json({
            message: "Usuario no encontrado"
        })
    }
}


