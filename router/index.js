const express = require("express");

const router = express.Router();

const candidateRouter = require("./candidaterouter");
const Registerrouter = require("./Registerrouter");
const Todolistrouter = require("./Todolistrouter");
const formrouter = require("./formrouter");


router.use(candidateRouter);
router.use(Registerrouter);
router.use(Todolistrouter);
router.use(formrouter)


module.exports = router;