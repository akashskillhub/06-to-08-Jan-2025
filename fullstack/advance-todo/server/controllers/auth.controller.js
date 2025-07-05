const Admin = require("../models/Admin")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const upload = require("../utils/upload")
const cloud = require("./../utils/cloud")
const User = require("../models/User")
const registerAdmin = async (req, res) => {
    const hash = await bcrypt.hash(req.body.password, 10)
    await Admin.create({ ...req.body, password: hash })
    res.json({ message: "admin register success" })
}
const loginAdmin = async (req, res) => {

    const { email, password } = req.body
    const result = await Admin.findOne({ email })

    if (!result) {
        return res.status(401).json({ message: "invalid credentials email" })
    }

    const verify = await bcrypt.compare(password, result.password)
    if (!verify) {
        return res.status(401).json({ message: "invalid credentials password" })
    }
    const token = jwt.sign({ _id: result._id }, process.env.JWT_KEY, { expiresIn: "1d" })
    res.cookie("ADMIN", token, { maxAge: 1000 * 60 * 60 * 24, secure: false, httpOnly: true })
    res.json({
        message: "admin login success", result: {
            _id: result._id,
            name: result.name,
            email: result.email,
        }
    })
}
const logoutAdmin = (req, res) => {
    res.clearCookie("ADMIN")
    res.json({ message: "admin logout success" })
}

const registerUser = (req, res) => {
    upload(req, res, async err => {
        if (err) {
            console.log(err)
            return res.status(400).json({ message: "unable to upload" })
        }
        if (!req.file) {
            return res.status(400).json({ message: "photo is required" })
        }
        const { secure_url } = await cloud.uploader.upload(req.file.path)
        const password = req.body.name.split("").slice(0, 2).join("")
            + req.body.email.split("").slice(0, 2).join("")

        const hash = await bcrypt.hash(password, 10)
        await User.create({ ...req.body, password: hash, photo: secure_url })
        res.json({ message: "register user success" })
    })
}
const loginUser = async (req, res) => {
    const { email, password } = req.body
    const result = await User.findOne({ email })

    if (!result) {
        return res.status(401).json({ message: "invalid credentials email" })
    }

    const verify = await bcrypt.compare(password, result.password)
    if (!verify) {
        return res.status(401).json({ message: "invalid credentials password" })
    }
    const token = jwt.sign({ _id: result._id }, process.env.JWT_KEY, { expiresIn: "1d" })
    res.cookie("USER", token, { maxAge: 1000 * 60 * 60 * 24, secure: false, httpOnly: true })
    res.json({
        message: "User login success", result: {
            _id: result._id,
            name: result.name,
            email: result.email,
        }
    })
    res.json({ message: "user login success" })
}
const logoutUser = (req, res) => {
    res.clearCookie("USER")
    res.json({ message: "user logout success" })
}

module.exports = {
    registerAdmin,
    loginAdmin,
    logoutAdmin,
    registerUser,
    loginUser,
    logoutUser
}