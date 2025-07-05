const multer = require("multer")
const path = require("path")

const x = multer.diskStorage({
    destination: (req, file, next) => {
        next(null, "public")
    },
    filename: (req, file, next) => {
        next(null, `${Date.now()}${path.extname(file.originalname)}`)
    },
})
// cloudinary
//                                              👇 same from frontend
module.exports = multer({ storage: x }).single("avatar")