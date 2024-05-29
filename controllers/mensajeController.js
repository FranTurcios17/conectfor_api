const { where } = require("sequelize");
const {Mensaje} = require("../models");

const getMensaje = async (req, res) => {
    try {
        const id = req.params.id
        const mensaje = await Mensaje.findOne({where : { id: id}});
        res.status(200).json(mensaje);

    } catch (error) {
        res.status(500).json({"error" : error.message});
    }
}

const createMensaje = async (req, res) => {
    const {pc, mobile} = req.body

    try {
        const mensaje = await Mensaje.create(req.body);
        res.status(201).json(mensaje);

    } catch (error) {
        res.status(500).json({"error" : error.message});
    }
}

const updateMensaje = async (req, res) => {
    try {

        const id = req.params.id;   

        const {
            pc,
            mobile
        } = req.body

        const resultado = await Mensaje.update({pc, mobile}, { where : {id : id}});

        if(resultado)
            {
                res.status(201).json(resultado);
            }
            else
            {
                res.status(409).json('no correct details');
            }        
        

    } catch (error) {
        res.status(500).json({"error" : error.message});
    }
}

module.exports = {
    createMensaje,
    updateMensaje,
    getMensaje
}
