const express = require('express')
const { singupUser, singinUser } = require('../controlers/userControlers')

const router = express.Router()

//singin
router.post('/singin', singinUser)

//signup
router.post('/singup', singupUser)

module.exports = router