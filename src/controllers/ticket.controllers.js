import Ticket from '../models/ticket.model.js'

export const readTickets = async (req, res) =>{
    const ticket = await Ticket.find()
    res.json(ticket)
}

export const readTicket = async (req, res) =>{
    const ticket = await Ticket.findById(req.params.id)
    if(!ticket) return res.status(404).json({
        msg: `El ticket ${ticket} no fue encontrado`
    })

    res.json(ticket)
}

export const createTickets = async (req, res) =>{
    const { name, description  } = req.body

    const newTicket = new Ticket({
        name,
        description,
        //service: req.serve.id
    })
    const saveTicket = await newTicket.save()
     res.json(saveTicket)
}

export const updateTickets = async (req, res) =>{
    const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    if(!ticket) return res.status(404).json({
        msg: `El ticket ${ticket} no fue encontrado`
    })

    res.json(ticket)
}

export const deleteTickets = async (req, res) =>{
    const ticket = await Ticket.findByIdAndDelete(req.params.id)
    if(!ticket) return res.status(404).json({
        msg: `El ticket ${ticket} no fue encontrado`
    })

    res.status(200).json({
        msg: `El ticket ${ticket.name} fue eliminado correctamente`
    })
}

