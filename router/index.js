const express = require("express");

const router = express.Router();

const candidateRouter = require("./candidaterouter");
const Registerrouter = require("./Registerrouter");
const Todolistrouter = require("./Todolistrouter");


router.use(candidateRouter);
router.use(Registerrouter);
router.use(Todolistrouter);


module.exports = router;