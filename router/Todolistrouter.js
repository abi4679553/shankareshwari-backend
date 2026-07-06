const express = require ("express")
const  {CreateTodolistlogic,fetchTodolist, fetchTodolistById} = require("../controller/Todolistlogic")

const router = express.Router()

router.post('/Create-Todolistlogic',CreateTodolistlogic)
router.get('/fetch-Todolist',fetchTodolist)
router.get('/fetch-Todolist/:reg ',fetchTodolistById)

module.exports = router