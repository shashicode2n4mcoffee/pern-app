var express = require('express')
var router = express.Router()

const studentController = require('../controllers').student

/* Student Router */
router.get('', studentController.list)
router.get('/:id', studentController.getById)
router.post('', studentController.add)
router.put('/:id', studentController.update)
router.delete('/:id', studentController.delete)

module.exports = router
