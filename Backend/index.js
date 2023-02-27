const express = require("express")
const connection = require("./config/config.js")
const cors = require("cors")
const bcrypt=require("bcrypt")
const app = express()
const saltrounds=10;
app.use(express.json())

app.use(express.urlencoded())
app.use(cors())


app.post("/login", (req, res) => {
    const { email, password } = req.body

})
app.post("/signup", (req, res) => {
    const { firstName, lastName, email, password } = req.body
    bcrypt.hash(password, saltrounds, (err, encrypt) => {
        if (err) {
            res.sendStatus(401);
        }
        else {
           console.log(encrypt)
           
        }
    })


})
app.listen(7010, async () => {
    try {
        await connection;
    }
    catch (err) {
        console.log(err)
    }
})