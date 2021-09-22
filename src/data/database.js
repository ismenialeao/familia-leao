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

