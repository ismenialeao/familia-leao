const mongoose = require('mongoose')
require('dotenv').config()

const MONGO_URL = process.env.MONGO_URI || process.env.MONGO_URL

const connect = () => {mongoose.connect(
    MONGO_URL, {
        useNewUrlPaser: true,
        useUnifiedTopology: true
})
        .then(console.log ('Database concetada com sucesso'))
        .catch(err => console.err)
}  
module.exports = { connect }

// const mongoose = require('mongoose') //conecta como mongodb

// const connect = () => {mongoose.connect( //parametros da função
//   'mongodb://localhost:27017/leao', 
  
//   {

//   useNewUrlParser: true,  //isso é padão
//   useUnifiedTopology: true

// })

// .then(console.log('Database conectada com sucesso.'))
//   .catch(err => console.err) //se der erro


// }

// module.exports = { connect }
