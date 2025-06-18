const express = require("express")
const mongoose = require("mongoose")

const app = express() // create server
app.use(express.json()) // middleware body-parser
app.use("/api/auth", require("./routes/user.routes"))

mongoose.connect("mongodb://localhost:27017/user")
mongoose.connection.once("open", () => {
    console.log("db connected")
    app.listen(5000, console.log("server running")) // start server
})