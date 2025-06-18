const { profile } = require("../controllers/user.controller")
const { protectedRoute } = require("../middlewares/auth.middleware")

const router = require("express").Router()

router
    .get("/profile", profile)

module.exports = router