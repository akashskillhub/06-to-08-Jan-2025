const User = require("../models/User")
const upload = require("../utils/upload")
const cloud = require("./../utils/cloudinary")
const path = require("path")
const createProfile = (req, res) => {
    upload(req, res, async err => {
        if (err) {
            console.log(err)
            return res.status(400).json({ message: "unable to upload" })
        }
        console.log(req.body)
        console.log(req.file) // single file
        const { secure_url } = await cloud.uploader.upload(req.file.path)
        await User.create({ ...req.body, profile: secure_url })

        res.json({ message: "user create success" })
    })
}
const getProfile = async (req, res) => {
    const result = await User.find()
    res.json({ message: "user fetch success", result })
}
const deleteProfile = async (req, res) => {
    const { uid } = req.params
    const result = await User.findById(uid)
    await cloud.uploader.destroy(path.basename(result.profile).split(".")[0])
    await User.findByIdAndDelete(uid)
    res.json({ message: "user remove success" })
}
const updateProfile = async (req, res) => {
    upload(req, res, async err => {
        if (err) {
            console.log(err)
            return res.status(400).json({ message: "unable to upload image" })
        }
        const { uid } = req.params
        if (req.file) {
            // new image recived
            // step 1 : get previouse image
            // step 2 : remove from cloudinary
            // step 3 : upload new image to cloudinary
            // step 4 : update in database
            const result = await User.findById(uid) // step 1
            await cloud.uploader.destroy(path.basename(result.profile).split(".")[0]) // step 2
            const { secure_url } = await cloud.uploader.upload(req.file.path) // step 3
            await User.findByIdAndUpdate(uid, { ...req.body, profile: secure_url }) // step 4

        } else {
            await User.findByIdAndUpdate(uid, req.body)
        }
        res.json({ message: "user update success" })
    })
}

module.exports = { createProfile, getProfile, deleteProfile, updateProfile }

// email
// sms
// advance todo
// mongo query , schema designing
// 1 Major project E Commerce
// mobile app
// whatsapp
// 3rd project