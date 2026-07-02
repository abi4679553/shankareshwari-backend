const express = require("express")
const {Createcandidatelogic} = require("../controller/candidatelogic")

const router = express.Router()
 
router.post('/Create-candidatelogic',Createcandidatelogic)

module.exports = router