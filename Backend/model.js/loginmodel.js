const mongoose = require("mongoose")


const Login = mongoose.Schema({
   
    email: String,
    password: String,
})

const loginModel = mongoose.model("loginModel", Login);
module.exports = loginModel;
