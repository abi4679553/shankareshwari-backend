const express = require("express")
const { Createcandidatelogic, fetchcandidate,fetchcandidateByEmail ,deletecandidate, deleteAllcandidate , updatecandidate } = require("../controller/candidatelogic")

const router = express.Router()

router.post('/Create-candidatelogic', Createcandidatelogic)

router.get('/fetch-candidate', fetchcandidate)

router.get('/fetch-candidate/:email',fetchcandidateByEmail)

router.delete('/delete-candidate/:email',deletecandidate)

router.delete('/delete-candidate',deleteAllcandidate)

router.put('/update-candidate/:email',updatecandidate)



module.exports = router;