const {
    createTodo,
    readTodo,
    updateTodo,
    deleteTodo,
    viewUsers,
    activateUser,
    deactivateUser
} = require("../controllers/admin.controller")

const router = require("express").Router()

router
    .post("/create-todo", createTodo)
    .get("/read-todo", readTodo)
    .put("/update-todo/:tid", updateTodo)
    .delete("/delete-todo/:tid", deleteTodo)

    .get("/view-users", viewUsers)
    .post("/activate-user", activateUser)
    .post("/deactivate-user", deactivateUser)

module.exports = router