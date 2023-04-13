const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const conextion = mongoose.connect("mongodb://localhost:27017")
module.exports = conextion;