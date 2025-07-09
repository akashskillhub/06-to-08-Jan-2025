const Todo = require("../models/Todo")

exports.viewTodo = async (req, res) => {
    const result = await Todo.find({ auther: req.user })
    res.json({ message: "user fetch todo success", result })
}
exports.completeTodo = async (req, res) => {
    await Todo.findByIdAndUpdate(req.params.tid, { complete: true })
    res.json({ message: "user todo complete success" })
}