const express = require("express")
const{ CreateTodolist , fetchTodolist, fetchTodolistById} = require("../controller/Todolist")
const router = express.Router()


router.post('/Create-Todolist', CreateTodolist)
router.get('/fetch-Todolist',fetchTodolist)
router.get('/fetch-Todolist/:RollNumber',fetchTodolistById)

module.exports = router;