const formModel = require("../model/form")

const Createform = async (req,res) => {
    const {name, email, password} = req.body
    try{
        if(!name || !email || !password){
            return res.json({ success : false, message : "All fields are required !"})
        }
        const isExisting = await formModel.findOne({ email })

        if(isExisting) {
            return res.json({ success : false, message : "Already existing email !"})
        }

        const newUser = new formModel({
            name,
            email,
            password
        });
        const save = await newUser.save()

        if(!save){
            return res.json({success : false, message : "failed to create try again !"})
        }
        return res.json({success : true, message : "Accound created successfully ",save})
    }
    catch (err) {
        console.log("error in create  user ", err)
    }
}

module.exports = {Createform}