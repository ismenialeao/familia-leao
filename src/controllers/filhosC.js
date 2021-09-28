const mongoose = require('mongoose')
const Filhos = require('../models/filhosM')

const getAll = async(req,res) =>{
    const filhos = await Filhos.find()
    res.status(200).json(filhos)
}

const create = async(req,res) =>{
    const addCrianca = new son ({
        _id: mongoose.Schema.Types.ObjectId,
       name: req.body.name,
       pais: req.body.pais,
       idade: req.body.idade,
       naturalidade: req.body.naturalidade,
       criadoEm: req.body.criadoEm
    })
}
const filhosCadastrados = await Filhos.findOne({name:req.body.name})
if(filhosCadastrados){
    return res.status(409).json({err})
}



module. exports = {
    getAll 
}