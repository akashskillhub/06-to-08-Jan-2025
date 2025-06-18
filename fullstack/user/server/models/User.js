const mongoose = require("mongoose")

module.exports = mongoose.model("user", new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    dept: { type: String, required: true },
    role: { type: String, required: true },
}))
