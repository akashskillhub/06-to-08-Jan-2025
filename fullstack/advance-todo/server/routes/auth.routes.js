const { registerAdmin, loginAdmin, logoutAdmin, registerUser, loginUser, logoutUser } = require("../controllers/auth.controller")
const { adminProtected } = require("../middlewares/auth.middleware")

const router = require("express").Router()

router
    // .post("/admin-register", registerAdmin)
    .post("/admin-login", loginAdmin)
    .post("/admin-logout", logoutAdmin)

    .post("/user-register", adminProtected, registerUser)
    .post("/user-login", loginUser)
    .post("/user-logout", logoutUser)

module.exports = router