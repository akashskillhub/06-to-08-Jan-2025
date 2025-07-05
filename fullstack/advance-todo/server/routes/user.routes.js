const { viewTodo, completeTodo } = require("../controllers/user.controller")

const router = require("express").Router()

router
    .get("/todo", viewTodo)
    .post("/complete-todo", completeTodo)

module.exports = router