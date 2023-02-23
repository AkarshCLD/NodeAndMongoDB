const Server = require("./Httpserver")

const express = require("express");

const app = express();

app.post("/host",(req, res) => {
    res.send("hi it is runnung using express server")
})


app.post("/host/:id",(req, res) => {
    res.send("hi it is runnung using express server")
})



app.listen(4000, () => {
    console.log("port is running")
})