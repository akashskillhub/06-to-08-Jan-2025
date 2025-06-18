const logger = (req, res, next) => {
    console.log("called")
    next()
}
module.exports = logger