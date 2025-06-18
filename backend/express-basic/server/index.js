const express = require("express")
const app = express()

app.use("/api/v1/", require("./routes/todo.routes"))
app.use("/api/v1/auth/", require("./routes/auth.routes"))

app.listen(5000, console.log("server running"))

// REST API