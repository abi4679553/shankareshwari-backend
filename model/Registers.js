const mongoose = require("mongoose")
const RegistersSchema = new mongoose.Schema({
    
    name: {type: String,required: true},
    email: { type: String, required: true,unique: true,trim: true,lowercase: true},
    password: { type: String,required: true,minlength: 6},
    age: { type: Number, min: 18,max: 60},
    role: {type: String,enum: ["Student", "Admin", "Trainer"],default: "Student"},
    isActive: {type: Boolean,default: true},
},{
    timestamps : true
});
module.exports = mongoose.model("Register",RegistersSchema);