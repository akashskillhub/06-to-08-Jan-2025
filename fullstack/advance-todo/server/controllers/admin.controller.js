const Todo = require("../models/Todo")
const User = require("../models/User")

exports.createTodo = async (req, res) => {
    await Todo.create(req.body)
    res.json({ message: "admin create todo success" })
}
exports.readTodo = async (req, res) => {
    const result = await Todo.find()
    res.json({ message: "admin todo fetch success", result })
}
exports.updateTodo = async (req, res) => {
    await Todo.findByIdAndUpdate(req.params.tid, req.body)
    res.json({ message: "admin todo update success" })
}
exports.deleteTodo = async (req, res) => {
    await Todo.findByIdAndDelete(req.params.tid)
    res.json({ message: "admin todo delete success" })
}

exports.viewUsers = async (req, res) => {
    const result = await User.find()
    res.json({ message: "admin user fetch success", result })
}
exports.activateUser = async (req, res) => {
    const { uid } = req.params
    await User.findByIdAndUpdate(uid, req.body)
    res.json({ message: "admin user activate success" })
}
exports.deactivateUser = async (req, res) => {
    const { uid } = req.params
    await User.findByIdAndUpdate(uid, req.body)
    res.json({ message: "admin user deactivate success" })
}


