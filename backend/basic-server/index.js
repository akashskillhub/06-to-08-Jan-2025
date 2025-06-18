const express = require("express")

const app = express() // 👈 create server

// middleware
app.use(express.json())

app.get("/", (req, res) => {
    res.json({ message: "fetch success" })
})

app.post("/", (req, res) => {
    console.log(req.body)
    res.json({ message: "create success" })
})

app.delete("/:skillhub", (req, res) => {
    console.log(req.params)
    res.json({ message: "delete success" })
})

app.use((req, res) => {
    res.status(404).json({ message: "resource not found" })
})

app.listen(5000, console.log("server running"))