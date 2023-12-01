import Ticket from '../models/ticket.model.js'

export const readTickets = async (req, res) =>{
    try {
        const ticket = await Ticket.find().populate('user').populate('service')
        res.json(ticket)
    } catch (error) {
        return res.status(404).json({
            message: "Ticket no encontrado"
        })
    }
}

export const readTicketsProfile = async (req, res) =>{
    try {
        const userId = req.user
        const ticket = await Ticket.find({
            user: userId
        }).populate('user').populate('service')
        res.json(ticket)
    } catch (error) {
        return res.status(404).json({
            message: "Ticket no encontrado"
        })
    }
}

export const readTicket = async (req, res) =>{
    try {
        const ticket = await Ticket.findById(req.params.id)
        if(!ticket) return res.status(404).json({
            msg: `El ticket ${ticket.name} no fue encontrado`
        })
    res.json(ticket)

    } catch (error) {
        return res.status(404).json({
            message: "Ticket no encontrado"
        })
    }

}

export const createTickets = async (req, res) =>{
    try {
        const { name, subject, description, state, date, service } = req.body
        const userId = req.user
    
        const newTicket = new Ticket({
            name,
            subject,
            description,
            state,
            date,
            user: userId,
            service: service
        })
        const saveTicket = await newTicket.save()
         res.status(201).json({
            saveTicket,
            msg: `El ticket ${newTicket.name} fue registrado correctamente`
        })
    } catch (error) {
        return res.status(404).json({
            message: "Ticket no encontrado"
        })
    }
}

export const updateTickets = async (req, res) =>{
    try {
        const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        if(!ticket) return res.status(404).json({
            msg: `El ticket ${ticket} no fue encontrado`
        })
        res.status(201).json({
            msg: `El ticket ${ticket.name} fue actualizado correctamente`
        })
    } catch (error) {
        return res.status(404).json({
            message: "Ticket no encontrado"
        })
    }
}

export const deleteTickets = async (req, res) =>{
    try {
        const ticket = await Ticket.findByIdAndDelete(req.params.id)
        if(!ticket) return res.status(404).json({
            msg: `El ticket ${ticket.name} no fue encontrado`
        })
    
        res.status(200).json({
            msg: `El ticket ${ticket.name} fue eliminado correctamente`
        })
    } catch (error) {
        return res.status(404).json({
            message: "Ticket no encontrado"
        })
    }
}

