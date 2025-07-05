const { createProfile, getProfile } = require("../controllers/user.controller")
const { logger } = require("../middlewares/logger.middleware")

const router = require("express").Router()

router
    .post("/create", logger, createProfile)
    .get("/", getProfile)

module.exports = router