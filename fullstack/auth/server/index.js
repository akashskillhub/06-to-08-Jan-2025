const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const logger = require("./utils/logger")
const cookieParse = require("cookie-parser")
const { protectedRoute } = require("./middlewares/auth.middleware")

const app = express()
app.use(express.json())
app.use(cors({ origin: "http://localhost:5173", credentials: true }))
app.use(logger)
app.use(cookieParse())
// app.use(protectedRoute)

app.use("/api/auth", require("./routes/auth.routes"))
app.use("/api/user", protectedRoute, require("./routes/user.routes"))

mongoose.connect("mongodb://localhost:27017/auth-basic")
mongoose.connection.once("open", () => {
    console.log("db connected")
    app.listen(5000, console.log("server running"))
})