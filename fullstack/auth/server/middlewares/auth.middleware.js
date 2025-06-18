const jwt = require("jsonwebtoken")
const protectedRoute = (req, res, next) => {
    // console.log(req.cookies)
    const user = req.cookies.USER
    if (!user) {
        return res.status(401).json({ message: "unauthorized access" })
    }
    jwt.verify(user, "securepassword", (err, data) => {
        if (err) {
            return res.status(401).json({ message: "invalid token" })
        }
        // console.log(data)
        req.user = data._id
        next()
    })

}

module.exports = { protectedRoute }