exports.createTodo = (req, res) => {
    res.json({ message: "admin create todo success" })
}
exports.readTodo = (req, res) => {
    res.json({ message: "admin todo fetch success" })
}
exports.updateTodo = (req, res) => {
    res.json({ message: "admin todo update success" })
}
exports.deleteTodo = (req, res) => {
    res.json({ message: "admin todo delete success" })
}

exports.viewUsers = (req, res) => {
    res.json({ message: "admin user fetch success" })
}
exports.activateUser = (req, res) => {
    res.json({ message: "admin user activate success" })
}
exports.deactivateUser = (req, res) => {
    res.json({ message: "admin user deactivate success" })
}


