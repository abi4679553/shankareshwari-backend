const express = require("express")
const{ CreateTodolist } = require("../controller/Todolist")
const router = express.Router()


router.post('/Create-Todolist', CreateTodolist)

module.exports = router;