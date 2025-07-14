const { registerUser, loginUser, logoutUser } = require("../controllers/auth.controller")

const router = require("express").Router()

router
    .post("/user-register", registerUser)
    .post("/user-login", loginUser)
    .post("/user-logout", logoutUser)

module.exports = router