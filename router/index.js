const express = require('express')
const candidateRouter = require("../router/candidaterouter");



const router = express.Router()

const Registerrouter = require('./Registerrouter');
const { Createcandidatelogic } = require('../controller/candidatelogic');

router.use(Registerrouter)
router.use(candidateRouter);







module.exports = router