const { readTodos, createTodo, updateTodo, deleteTodo } = require("../controllers/todo.controller")

const router = require("express").Router()

router
    .get("/", readTodos)
    .post("/create", createTodo)
    .put("/modify/:tid", updateTodo)
    .delete("/remove/:tid", deleteTodo)

module.exports = router