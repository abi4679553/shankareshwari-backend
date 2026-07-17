const formModel = require("../model/form");

const Createform = async (req, res) => {
    try {

        const { Name, email, password } = req.body;

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

const fetchform = async (req, res) => {
    try {
        const form = await formModel.find({})
        console.log(form);
        if (form.length === 0) {
            return res.json({ success: false, message: "form not found in the database" })
        }
        return res.json({ success: true, message: "form  found in the database successfully" ,table: form})

    }
    catch (err) {
        console.log(err.message)
        return res.json({ success: false, message: "network error in the fetch method " })

    }
}


module.exports = { Createform ,fetchform};