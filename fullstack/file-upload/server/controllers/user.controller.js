const User = require("../models/User")
const upload = require("../utils/upload")

const createProfile = (req, res) => {
    upload(req, res, async (err) => {

        if (err) {
            console.log(err)
            return res.status(400).json({ message: "unable to upload image" })
        }
        console.log(req.body)
        console.log(req.file) // single file upload
        // console.log(req.files) // multiple file upload

        await User.create({ ...req.body, profile: req.file.filename })


        res.json({ message: "user create success" })
    })
}
const getProfile = (req, res) => {
    res.json({ message: "user fetch success" })
}

module.exports = { createProfile, getProfile }