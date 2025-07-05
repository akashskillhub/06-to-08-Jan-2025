const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const { logger } = require("./middlewares/logger.middleware")
require("dotenv").config()

const app = express()
app.use(express.json())
app.use(cors({ origin: "http://localhost:5173", credentials: true }))
// app.use(logger)

app.use("/api/user", require("./routes/user.routes"))

mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open", () => {
    console.log("db connected")
    app.listen(process.env.PORT, console.log("server running"))
})