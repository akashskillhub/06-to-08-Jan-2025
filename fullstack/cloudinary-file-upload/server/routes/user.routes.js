const { createProfile, getProfile, deleteProfile, updateProfile } = require("../controllers/user.controller")

const router = require("express").Router()

router
    .post("/create", createProfile)
    .get("/", getProfile)
    .delete("/:uid", deleteProfile)
    .put("/modify/:uid", updateProfile)

module.exports = router