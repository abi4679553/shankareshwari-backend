const TodolistModel = require("../model/Todolist")

const CreateTodolist = async (req, res) => {
    const { RollNumber, title, description, status, priority, dueDate } = req.body
    try {
        if (!RollNumber || !title || !description || !status || !priority || !dueDate) {
            return res.json({ success: false, message: "All fields are requires" })
        }
        const isExisting = await TodolistModel.findOne({RollNumber})
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

module.exports = { CreateTodolist }