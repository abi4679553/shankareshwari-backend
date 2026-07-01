const express = require("express")
const {CreateRegisterlogic} = require("../controller/Registerslogic")

const router = express.Router()

router.post('/Create-Registerlogic',CreateRegisterlogic)

module.exports = router