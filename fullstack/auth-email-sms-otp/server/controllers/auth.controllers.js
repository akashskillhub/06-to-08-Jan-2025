const User = require("../models/User")
const sendEmail = require("../utils/email")
const jwt = require("jsonwebtoken")
const { differenceInSeconds } = require("date-fns")
exports.register = async (req, res, next) => {
    try {
        const { email, mobile } = req.body
        const result = await User.findOne({ $or: [{ email }, { mobile }] })
        if (result) {
            return res.status(400).json({ message: "email or mobile already exist" })
        }
        await User.create(req.body)
        await sendEmail({
            to: email,
            subject: "welcome to skillhub",
            message: "Welcome to our service! We're excited to have you on board. Let us know if you need any assistance getting started."
        })
        res.json({ message: "register success" })
    } catch (error) {
        next(error)
    }
}

exports.sendOTP = async (req, res, next) => {
    try {
        const { username } = req.body
        const result = await User.findOne({ $or: [{ email: username }, { mobile: username }] })
        if (!result) {
            return res.status(400).json({ message: "email or mobile does not exist" })
        }
        const OTP = Math.floor(100000 + Math.random() * 900000)
        await User.findByIdAndUpdate(result._id, { otp: OTP, otpSendOn: new Date() })
        await sendEmail({
            to: result.email,
            subject: "otp",
            message: `your otp is ${OTP}`
        })
        res.json({ message: "otp send success" })
    } catch (error) {
        next(error)
    }
}
exports.login = async (req, res, next) => {
    try {
        const { username, otp } = req.body
        const result = await User.findOne({ $or: [{ email: username }, { mobile: username }] })
        if (!result) {
            return res.status(401).json({ message: "invalid credentials" })
        }
        if (otp != result.otp) {
            return res.status(401).json({ message: "invalid otp" })
        }
        // later date, eariler date
        if (differenceInSeconds(new Date(), result.otpSendOn) > 30) {
            await User.findByIdAndUpdate(result._id, { otp: null })
            return res.status(401).json({ message: "otp expired" })
        }


        await User.findByIdAndUpdate(result._id, { otp: null })
        // jwt token
        const token = jwt.sign({ _id: result._id }, process.env.JWT_KEY, { expiresIn: "1d" })
        // send cookie
        res.cookie("USER", token, { maxAge: 60 * 60 * 60 * 24, secure: false, httpOnly: true })
        res.json({
            message: "login success",
            result: {
                _id: result._id,
                email: result.email,
                mobile: result.mobile,
            }
        })
    } catch (error) {
        next(error)
    }
}
exports.logout = async (req, res) => {
    res.clearCookie("USER")
    res.json({ message: "logout success" })
}