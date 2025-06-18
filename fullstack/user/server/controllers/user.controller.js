const User = require("../models/User")

const register = async (req, res) => {
    /*
        status browser instruction

        100 - 199       Informational (Rarely used)
        200 - 299       ok  eg. fetch success
        300 - 399       Redirection eg. Moved Permanently
        400 - 499       user error eg. 404 Not Found
        500 - 599       server error eg. 500 Internal Server Error
    */
    // JWT Authentication
    const result = await User.findOne({ email: req.body.email })
    if (result) {
        return res.status(400).json({ message: "email aready exist" })
    }
    await User.create(req.body)
    res.json({ message: "user register success" })
}
const allUsers = async (req, res) => {
    const result = await User.find()
    res.json({ message: "user fetch success", result })
}

const deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.uid)
    res.json({ message: "user delete success" })
}
const updateUser = async (req, res) => {
    await User.findByIdAndUpdate(req.params.uid, req.body)
    res.json({ message: "user update success" })
}

module.exports = { register, allUsers, deleteUser, updateUser }