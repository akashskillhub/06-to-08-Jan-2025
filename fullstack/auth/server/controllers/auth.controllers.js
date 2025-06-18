const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const register = async (req, res) => {
    const hash = await bcrypt.hash(req.body.password, 10)
    console.log(hash)
    await User.create({ ...req.body, password: hash })
    res.json({ message: "register success" })
}
const login = async (req, res) => {
    const { email, password } = req.body
    const result = await User.findOne({ email })
    if (!result) {
        return res.status(401).json({ message: "email not found" })
    }
    const isverify = await bcrypt.compare(password, result.password)
    if (!isverify) {
        return res.status(401).json({ message: "password not found" })
    }
    const token = jwt.sign({ _id: result._id, name: result.name }, "securepassword", { expiresIn: "1h" })
    // console.log(token)
    res.cookie("USER", token, { maxAge: 1000 * 60 })
    res.json({
        message: "login success", result: {
            _id: result._id,
            name: result.name,
            email: result.email,
        }
    })
}

const logout = (req, res) => {
    res.clearCookie("USER")
    res.json({ message: "logout success" })
}
module.exports = { register, login, logout }