const Todolist = require("../model/Todolist");
const TodolistlogicModel = require("../model/Todolist")

const CreateTodolistlogic = async (req, res) => {
    const { reg, title, description, status, priority, dueDate } = req.body;
    try {
        if (!reg || !title || !description || !status || !priority || !dueDate) {
            return res.send({ success: false, message: "All fileds  are  required " })
        }
        const isExisting = await TodolistlogicModel.findOne({
            reg,
            title
        })
        if (isExisting) {
            return res.send({ success: false, message: "already existing" })
        }

        const newUser = new TodolistlogicModel({
            reg,
            title,
            description,
            status,
            priority,
            dueDate
        });
        const save = await newUser.save()

        if(!save) {
              return res.json({ success: "false", message: " failes to create try again" })
        }
          return res.json({ success: "ture", message: " account created successfully ",save})
    }
    catch (err) {
        console.log("error in create user ", err)
    }
}


const fetchTodolist = async (req,res) => {
    try{
        const Todolist = await TodolistlogicModel.find({})
        if(!Todolist) {
            return res.json({ success: "false", message: "todolist  no fount " })
        }
         return res.json({ success: "true", message: " fetch data successfully " ,data: Todolist})
    }
    catch (err) {
        console.log("error in fetch Todolist ")
         return res.json({ success: "false", message: "  error in  todolist ",})
    }
}

const fetchTodolistById = async (req,res)=>{
    try{
        const {reg} = req.params 
        const Todolist = await TodolistlogicModel .findById(reg)
        if(!Todolist){
            return res.json({ success: "false", message: "fetchbyid todolist is  not found" })
        }
        return res.json({ success: "true", message: "fetchbyid todolist is successfully", data: Todolist })
    }  
    catch (err) {
        console.log("network error in fetchbyid todolist")
        return res.json({ success: "false", message: "fetchbyid is error " })
    } 
}





module.exports = { CreateTodolistlogic , fetchTodolist, fetchTodolistById}