const mongoose = require('mongoose')

const paisSchema =  new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
      type: String,
      required: true
    },
    profissao:{
      type: String,
      required: true
    },
    conjugue:{
      type: String,
      required: true
    },
    pets:{
        type: String,
        required: true
    },
    filiacoes:{
        type: String,
        required: true

    },
    criadoEm: { 
        type: Date,
        required: true,
        default: new Date
    },
    
    filhos: {type: mongoose.Schema.Types.ObjectId, ref: 'filhos'} 
})
    module.exports = mongoose.model( 'paisM' ,paisSchema)