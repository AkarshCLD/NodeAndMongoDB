const mongoose = require("mongoose")


const signup = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
})

const signupModel = mongoose.model("signupModel", signup);
module.exports = signupModel;
