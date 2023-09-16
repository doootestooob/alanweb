const express = require('express')

const authcontroller = require('../controllers/auth')

const User = require('../modules/users')

const router = express.Router()

router.post('/register', authcontroller.register)

router.post('/login', authcontroller.login)

router.get('/logout', authcontroller.logout)

router.post('/verifyotp', authcontroller.verify)

module.exports = router