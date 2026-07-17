const formModel = require("../model/form");


const Createform = async (req, res) => {
    try {

        const { Name,  email, password } = req.body;

        if (!Name || !email || !password) {
            return res.json({
                success: false,
                message: "All fields are required!"
            });
        }

        const isExisting = await formModel.findOne({ email });

        if (isExisting) {
            return res.json({
                success: false,
                message: "Email already exists!"
            });
        }

        const newUser = await formModel.create({
            Name,
            email,
            password
        });

        return res.json({
            success: true,
            message: "Account created successfully",
            data: newUser
        });

    } catch (err) {
        console.log(err);

        return res.json({
            success: false,
            message: "Server Error"
        });
    }
};



module.exports = { Createform };