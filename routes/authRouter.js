const express = require('express')
const router = express.Router()

const registerController = require('../controllers').auth

//Register User
router.post('/register', registerController.add)

module.exports = router
