const register = (req, res) => {
    res.json({ message: "register success" })
}
const login = (req, res) => {
    res.json({ message: "login success" })
}
const logout = (req, res) => {
    res.json({ message: "logout success" })
}

module.exports = { register, login, logout }