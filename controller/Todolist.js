const TodolistModel = require("../model/Todolist")

const CreateTodolist = async (req, res) => {
    const { RollNumber, title, description, status, priority, dueDate } = req.body
    try {
        if (!RollNumber || !title || !description || !status || !priority || !dueDate) {
            return res.json({ success: false, message: "All fields are requires" })
        }
        const isExisting = await TodolistModel.findOne({ RollNumber })
        if (isExisting) {
            return res.json({ success: false, message: "Already existing the todolist" })
        }
        const todoUser = new TodolistModel({
            RollNumber,
            title,
            description,
            status,
            priority,
            dueDate
        });
        const save = await todoUser.save()
        if (!save) {
            return res.json({ success: false, message: " failed to create try again " })
        }
        return res.json({ success: true, message: "account created successfully ", save })
    }
    catch (err) {
        console.log("error in create  user ", err.message)
    }
};

const fetchTodolist = async (req, res) => {
    try {
        const Todolist = await TodolistModel.find({})
        if (!Todolist) {
            return res.json({ success: false, message: " Todolist not found " })
        }
        return res.json({ success: true, message: " todolist fetch successfully ", data: Todolist })
    }
    catch (err) {
        console.log("error in fetch todolist", err)
        return res.json({ success: false, message: "error in todolist" });
    }
}

const fetchTodolistById = async (req, res) => {
    try {
        const { RollNumber } = req.params;

        const Todolist = await TodolistModel.findOne({ RollNumber })
        if (!Todolist) {
            return res.json({ success: false, message: " todolist fetchbyid not found" })
        }
        return res.json({ success: true, message: " todolistbyid fetch successfully", data: Todolist })
    }
    catch (err) {

        console.log("error in fetch todolist", err)
        return res.json({ success: false, message: "error in todolistbyid" });
    }

}


module.exports = { CreateTodolist, fetchTodolist, fetchTodolistById }