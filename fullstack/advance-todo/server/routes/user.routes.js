const { viewTodo, completeTodo } = require("../controllers/user.controller")

const router = require("express").Router()

router
    .get("/todo", viewTodo)
    .put("/complete-todo/:tid", completeTodo)

module.exports = router