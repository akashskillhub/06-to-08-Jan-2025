const getTodos = (req, res) => {
    res.json({ message: "todo fetch success" })
}
const createTodo = (req, res) => {
    res.json({ message: "todo create success" })
}
const updateTodo = (req, res) => {
    res.json({ message: "todo update success" })
}
const deleteTodo = (req, res) => {
    res.json({ message: "todo delete success" })
}
module.exports = { getTodos, createTodo, updateTodo, deleteTodo }