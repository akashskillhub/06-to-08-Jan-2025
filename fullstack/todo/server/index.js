const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()
app.use(cors({ origin: "http://localhost:5173" }))

app.use(express.json()) // 👈 body parser
app.use("/api/v1/notes", require("./routes/todo.routes"))

mongoose.connect("mongodb://localhost:27017/express-todo")
mongoose.connection.once("open", () => {
    console.log("db connected")
    app.listen(5000, console.log("server running on 5000"))
})