const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    subject: {
        type: String,
    },
    message: {
        type: String,
        required: true
    }
})

const messages = mongoose.model("messages", messageSchema)
module.exports = messages