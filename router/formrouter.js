const express = require("express");
const { Createform } = require("../controller/form");

const router = express.Router();

router.post("/Create-form", Createform);


module.exports = router;