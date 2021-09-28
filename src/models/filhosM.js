const mongoose = require('mongoose')

const filhosSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:{
        type:String,
        required: true
    },
    pais:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    idade:{
        type: Number,
        required: true
    },
    naturalidade:{
        type: String,
        required: true
    },
    criadoEm:{
        type:Date,
        required:true,
        default: new Date
    },

})

module.exports = mongoose.model('filhos', filhosSchema)