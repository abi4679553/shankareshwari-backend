const express = require("express");
const { Createform ,fetchform} = require("../controller/form");

const router = express.Router();

router.post("/Create-form", Createform);
router.get("/fetch-form",fetchform)


module.exports = router;