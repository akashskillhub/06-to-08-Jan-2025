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
    .put("/activate-user/:uid", activateUser)
    .put("/deactivate-user/:uid", deactivateUser)

module.exports = router