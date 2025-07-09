const jwt = require("jsonwebtoken")
const adminProtected = (req, res, next) => {
    const token = req.cookies.ADMIN
    if (!token) {
        return res.status(401).json({ message: "no cookie found" })
    }
    jwt.verify(token, process.env.JWT_KEY, (err, decode) => {
        if (err) {
            console.log(err)
            return res.status(401).json({ message: "invalid token" })
        }
        // console.log(decode)
        req.admin = decode._id
        next()

    })
}
const userProtected = (req, res, next) => {
    const token = req.cookies.USER
    if (!token) {
        return res.status(401).json({ message: "no cookie found" })
    }
    jwt.verify(token, process.env.JWT_KEY, (err, decode) => {
        if (err) {
            console.log(err)
            return res.status(401).json({ message: "invalid token" })
        }
        // console.log(decode)
        req.user = decode._id
        next()

    })
}

module.exports = { adminProtected, userProtected }