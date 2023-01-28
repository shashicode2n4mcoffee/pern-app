var express = require('express')
var router = express.Router()

const lecturerController = require('../controllers').lecturer

/* Lecturer Router */
router.get('', lecturerController.list)
router.get('/:id', lecturerController.getById)
router.post('', lecturerController.add)
router.put('/:id', lecturerController.update)
router.delete('/:id', lecturerController.delete)

module.exports = router
