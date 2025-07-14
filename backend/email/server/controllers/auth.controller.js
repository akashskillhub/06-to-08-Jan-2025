const User = require("../models/User")
const sendEmail = require("../utils/email")

const registerUser = async (req, res) => {
    const { email, name } = req.body
    await User.create(req.body)
    await sendEmail({
        to: email,
        subject: "welcome to sklillhub",
        message: `hi ${name}, thank you for registering with us`,
    })
    res.json({ message: "register user success" })
}
const loginUser = async (req, res) => {

    res.json({ message: "user login success" })
}
const logoutUser = (req, res) => {
    res.json({ message: "user logout success" })
}

module.exports = {
    registerUser,
    loginUser,
    logoutUser
}