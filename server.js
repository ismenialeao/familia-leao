const express = require('express')

const app = express()
const cors = require('cors')
app.use(cors())

const db = require('./src/data/database')
db.connect()
app.use(express.json())

//PAIS
const routerPais = require('./src/routes/paisR')

app.use('/pais', routerPais)

//FILHOS

//const routerFilhos = require('./src/routes/filhosR')
//app.use('/filhos', routerFilhos)




const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log('Servidor em porta 8080'))