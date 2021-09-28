const express = require('express')
const router = express.Router()
const controller = require('../controllers/filhosC')


router.get('/', controller.getAll)
router.post('/create', controller.create)


module.exports = router