const express = require("express")
const mongoose = require("mongoose")

const app = express()

// middleware
app.use(express.json()) // body parser

app.use("/api/employee", require("./routes/employee.routes"))
mongoose.connect("mongodb://localhost:27017/employee")
mongoose.connection.once("open", () => {
    console.log("db connected")
    app.listen(5000, console.log("server running"))
})