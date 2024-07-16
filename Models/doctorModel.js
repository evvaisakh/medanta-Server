const mongoose = require('mongoose')

const doctorSchema = new mongoose.Schema({
    docName: {
        type: String,
        required: true
    },
    docDepartment: {
        type: String,
        required: true,
    },
    docQualification: {
        type: String,
        required: true,
    },
    docEmail: {
        type: String,
        required: true,
    },
    docPhone: {
        type: Number,
        required: true
    },
    docImage: {
        type: String,
        required: true
    }
})

const doctors = mongoose.model("doctors", doctorSchema)
module.exports = doctors