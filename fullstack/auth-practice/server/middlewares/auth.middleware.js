const privateRoutes = (req, res, next) => {
    // check user is loggedin or not
    // console.log(req.cookies)
    if (!req.cookies.AUTH_USER) {
        return res.status(401).json({ message: "no cookie found" })
    }
    next()
}

module.exports = { privateRoutes }