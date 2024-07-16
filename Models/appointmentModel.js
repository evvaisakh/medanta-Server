const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema({
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
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    appointmentDate: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    doctor: {
        type: String,
        required: true
    },
    remarks: {
        type: String,
    },
    userId: {
        type: String,
        required: true
    }
}, { timestamps: true })

const appointments = mongoose.model("appointments", appointmentSchema)
module.exports = appointments