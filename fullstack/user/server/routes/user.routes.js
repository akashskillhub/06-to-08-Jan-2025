const { allUsers, register, deleteUser, updateUser } = require("../controllers/user.controller")

const router = require("express").Router()

router
    .get("/fetch", allUsers)
    .post("/signup", register)
    .delete("/remove/:uid", deleteUser)
    .put("/modify/:uid", updateUser)

module.exports = router