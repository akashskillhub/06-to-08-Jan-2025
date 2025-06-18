const Todo = require("../models/Todo")

const createTodo = async (req, res) => {
    await Todo.create(req.body)
    res.json({ message: "todo create success" })
}
const readTodos = async (req, res) => {
    const result = await Todo.find()
    res.json({ message: "todo read success", result })
}
const updateTodo = (req, res) => {
    res.json({ message: "todo update success" })
}
const deleteTodo = async (req, res) => {
    await Todo.findByIdAndDelete(req.params.tid)
    res.json({ message: "todo delete success" })
}

module.exports = { createTodo, readTodos, updateTodo, deleteTodo }