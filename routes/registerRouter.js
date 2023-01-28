const express = require('express')
const router = express.Router()

const registerController = require('../controllers').register

//Register User
router.post('', registerController.add)

module.exports = router
