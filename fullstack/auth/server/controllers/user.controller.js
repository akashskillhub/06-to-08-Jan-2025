const User = require("../models/User")

const profile = async (req, res) => {
    // console.log(req.user)
    const result = await User.findById(req.user)

    res.json({ message: "profile fetch success", result })
}

module.exports = { profile }