const mongoose = require("mongoose")

module.exports = mongoose.model("emp", new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: Number, required: true },
    gender: { type: String, required: true },
}))