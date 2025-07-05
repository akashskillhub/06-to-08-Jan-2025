const logger = (req, res, next) => {
    console.log("logger called")
    next()
}

module.exports = { logger }