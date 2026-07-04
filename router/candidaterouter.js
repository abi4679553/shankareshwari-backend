const express = require("express")
const { Createcandidatelogic, fetchcandidate,fetchcandidateByEmail  } = require("../controller/candidatelogic")

const router = express.Router()

router.post('/Create-candidatelogic', Createcandidatelogic)

router.get('/fetch-candidate', fetchcandidate)

router.get('/fetch-candidate/:email',fetchcandidateByEmail)


module.exports = router;