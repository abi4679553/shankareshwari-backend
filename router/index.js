const express = require('express')



const router = express.Router()

const Registerrouter = require('./Registerrouter')

router.use(Registerrouter)











module.exports = router