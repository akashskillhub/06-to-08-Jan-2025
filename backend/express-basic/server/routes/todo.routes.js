const { getTodos, createTodo, updateTodo, deleteTodo } = require("../controllers/todo.controllers")

const router = require("express").Router()

router
    .get("/todos", getTodos)
    .post("/create-todo", createTodo)
    .put("/modify-todo/:todoId", updateTodo)
    .delete("/remove-todo/:todoId", deleteTodo)

module.exports = router