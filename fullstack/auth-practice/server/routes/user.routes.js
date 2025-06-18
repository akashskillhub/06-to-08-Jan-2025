const { allUsers } = require("../controllers/user.controller")

const router = require("express").Router()

router
    .get('/', allUsers)

module.exports = router