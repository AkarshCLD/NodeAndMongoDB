const mongoose=require("mongoose")
mongoose.set("strictQuery",true)
const connection=mongoose.connect("mongodb://localhost:27017/login",()=>{
    console.log("db id connected")
})

module.exports=connection;
// mongodb+srv://akarshgupta007:nsKEHHivy7pIEmB6@cluster0.0xnlwy6.mongodb.net/?retryWrites=true&w=majority