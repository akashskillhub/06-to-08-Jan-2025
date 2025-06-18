const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const cookieParse = require("cookie-parser")
const { privateRoutes } = require("./middlewares/auth.middleware")

const app = express()
app.use(express.json())
app.use(cookieParse())
app.use(cors({ origin: "http://localhost:5173", credentials: true }))

app.use("/api/auth", require("./routes/auth.routes"))
app.use("/api/user", privateRoutes, require("./routes/user.routes"))

mongoose.connect("mongodb://localhost:27017/auth-practice")
mongoose.connection.once("open", () => {
    console.log("db connected")
    app.listen(5000, console.log("server running"))
})