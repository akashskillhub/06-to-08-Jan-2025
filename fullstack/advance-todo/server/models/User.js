const mongoose = require("mongoose")

module.exports = mongoose.model("user", new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    photo: { type: String, required: true },
    password: { type: String, required: true },
    active: { type: Boolean, default: true },
}))