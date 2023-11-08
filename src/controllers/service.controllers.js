import Service from '../models/serive.model.js'

export const readServices = async (req, res) =>{
    try {
        const service = await Service.find()
        res.json(service)
    } catch (error) {
        return res.status(404).json({
            message: "Servicio no encontrado"
        })
    }
}

export const readService = async (req, res) =>{
    try {
        const service = await Service.findById(req.params.id)
        if(!service) return res.status(404).json({
            msg: `El servicio ${service} no fue encontrado`
        })
        res.json(service)
    } catch (error) {
        return res.status(404).json({
            message: "Servicio no encontrado"
        })
    }
}

export const createServices = async (req, res) =>{
    try {
        const { name, description, category, price} = req.body
        const newService = new Service({
            name,
            description,
            category,
            price
        })
        const saveService = await newService.save()
         res.json(saveService)
    } catch (error) {
        return res.status(404).json({
            message: "Servicio no encontrado"
        })
    }
}

export const updateServices = async (req, res) =>{
    try {
        const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        if(!service) return res.status(404).json({
            msg: `El servicio ${service.name} no fue encontrado`
        })
        res.json(service)
    } catch (error) {
        return res.status(404).json({
            message: "Servicio no encontrado"
        }) 
    }
}

export const deleteServices = async (req, res) =>{
    try {
        const service = await Service.findByIdAndDelete(req.params.id)
        if(!service) return res.status(404).json({
            msg: `El servicio ${service.name} no fue encontrado`
        })
    
        res.status(200).json({
            msg: `El servicio ${service.name} fue eliminado correctamente`
        })
    } catch (error) {
        return res.status(404).json({
            message: "Servicio no encontrado"
        }) 
    }
}

