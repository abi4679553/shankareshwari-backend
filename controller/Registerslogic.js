const RegisterslogicModel = require('../model/Registers')

const CreateRegisterlogic = async (req, res) => {
    try {
        const { name, email, password, age, role, isActive } = req.body

        if (!name || !email || !password || !age || !role || !isActive) {
            return res.json({ success: false, message: "All filed are required" })
        }
        const isExisting = await RegisterslogicModel.findOne({ email })

        if (isExisting) {
            return res.json({ success: false, message: "Already account exits please try again later" })
        }

        const newUser = new RegisterslogicModel({
            name,
            email,
            password,
            age,
            role,
            isActive
        });

        const save = await newUser.save()

        if (!save) {
            return res.json({ success: false, message: "Failed to create please try again later" })
        }

        return res.json({ success: true, message: "Account cretaed successfully", save })
    }
    catch (err) {
        console.log("error in create user ", err)
    }

}
module.exports = { CreateRegisterlogic }