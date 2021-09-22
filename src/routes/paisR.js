const express = require('express')
const router = express.Router()
const controller = require('../controllers/paisC')


router.get('/', controller.getAll)
router.post('/create', controller.create)
router.patch('/:id', controller.update)
router.delete('/:id', controller.deleteFamily)

module.exports = router