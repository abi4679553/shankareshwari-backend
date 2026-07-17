const express = require("express");
const { Createform ,fetchform ,deleteform} = require("../controller/form");

const router = express.Router();

router.post("/Create-form", Createform);
router.get("/fetch-form",fetchform)
router.delete("/delete-user/:id",deleteform)


module.exports = router;