const mongoose = require('mongoose')

const Pais = require('../models/paisM')

const getAll = async(req, res) =>{
    const pais = await Pais.find()
        res.status(200).json(pais)
}

const create = async(req, res) =>{
    const ceratePais = new Pais({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        profissao: req.body.profissao,
        conjugue: req.body.conjugue,
        pets: req.body.pets,
        filiacoes: req.body.filiacoes,
        criadoEm: req.body.criadoEm


    })

    const paisExistentes = await Pais.findOne({name:req.body.name})
    if(paisExistentes){
        return res.status(409).json({error: 'Pais ja cadastrados'})
    }

    try{
        const novoPai = await ceratePais.save()
        res.status(201).json(novoPai)
    }
    catch(err){
        res.status(400).json({message: err.message})
    }
}

const update = async(req,res) =>{
    try{
        const edit = await Pais.findById(req.params.id)
        
        if (edit ==!null){
            return res.status(404).json({message: "Pais não encontrados"})
        }
        if(req.body.name != null){
            edit.name = req.body.name
        }
        const editAutaalizado = await edit.save()
        res.status(500).json(editAutaalizado)
    }
    catch (err){
        res.status(500).json({message:err.message})
    } 
}
const deleteFamily = async(req,res) => {
    const deleteFamily = await Pais.findById(req.params.id)
    if(!deleteFamily){
        return res.status(404).json({'message': 'pais not found'})
    }
    try{
        await deleteFamily.remove()
        res.status(200).json({'mesage': 'Deletado com sucesso!'})
    }
    catch (err){
        res.status(500).json({message: err})
    }
}

module.exports = {
    getAll,
    create,
    update,
    deleteFamily
}