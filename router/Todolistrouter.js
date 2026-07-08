const express = require("express")
const{ CreateTodolist , fetchTodolist, fetchTodolistById,deleteTodolist , updateTodolist} = require("../controller/Todolist")
const router = express.Router()


router.post('/Create-Todolist', CreateTodolist)
router.get('/fetch-Todolist',fetchTodolist)
router.get('/fetch-Todolist/:RollNumber',fetchTodolistById)
router.delete('/delete-Todolist/:RollNumber',deleteTodolist)
router.put('/update-Todolist/:RollNumber',updateTodolist)

module.exports = router;