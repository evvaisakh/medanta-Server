const doctors = require('../Models/doctorModel')
const messages = require('../Models/messageModel')

// add doctor
exports.addDoctor = async (req, res) => {
    console.log("Inside Add Doctor request");
    console.log(req.body);
    console.log(req.file);
    const { docName, docDepartment, docQualification, docEmail, docPhone } = req.body
    const docImage = req.file.filename
    try {
        const existingDoctor = await doctors.findOne({ docEmail })
        if (existingDoctor) {
            res.status(406).json("Doctor already exists in our database!!!")
        } else {
            const newDoctor = new doctors({
                docName, docDepartment, docQualification, docEmail, docPhone, docImage
            })
            await newDoctor.save()
            res.status(200).json(newDoctor)
        }
    } catch (err) {
        res.status(401).json(err)
    }
}

// get all doctor
exports.getAllDoctors = async (req, res) => {
    const searchKey = req.query.search
    const query = {
        docDepartment: {
            $regex: searchKey, $options: "i"
        }
    }
    try {
        const allDoctors = await doctors.find(query)
        res.status(200).json(allDoctors)
    } catch (err) {
        res.status(401).json(err)
    }
}

// edit doctor
exports.editDoctor = async (req, res) => {
    console.log("Inside edit doctor");
    const { docId } = req.params
    const { docName, docDepartment, docQualification, docEmail, docPhone, docImage } = req.body
    const newImage = req.file ? req.file.filename : docImage
    try {
        const updatedDoctor = await doctors.findByIdAndUpdate({ _id: docId }, {
            docName, docDepartment, docQualification, docEmail, docPhone, docImage: newImage
        }, { new: true })
        await updatedDoctor.save()
        res.status(200).json(updatedDoctor)
    } catch (err) {
        res.status(401).json(err)
    }
}

// remove doctor
exports.removeDoctor = async (req, res) => {
    console.log("Inside remove doctor");
    const { docId } = req.params
    try {
        const doctorDetails = await doctors.findByIdAndDelete({ _id: docId })
        res.status(200).json(doctorDetails)
    } catch (err) {
        res.status(401).json(err)
    }
}

// get doctor and department
exports.getDocAndDep = async (req, res) => {
    try {
        const docAndDep = await doctors.find({})
        res.status(200).json(docAndDep)
    } catch (err) {
        res.status(401).json(err)
    }
}

// send message
exports.sendMessage = async (req, res) => {
    console.log("Inside Send Message request");
    console.log(req.body);
    const { name, email, phone, subject, message } = req.body
    try {
        const review = new messages({
            name, email, phone, subject, message
        })
        await review.save()
        res.status(200).json(review)
    } catch (err) {
        res.status(401).json(err)
    }
}

// get all messages
exports.getAllMessages = async (req, res) => {
    try {
        const allMessages = await messages.find()
        res.status(200).json(allMessages)
    } catch (err) {
        res.status(401).json(err)
    }
}

// delete message
exports.deleteMessage = async (req, res) => {
    console.log("Inside delete message");
    const { msgId } = req.params
    try {
        const messageDetails = await messages.findByIdAndDelete({ _id: msgId })
        res.status(200).json(messageDetails)
    } catch (err) {
        res.status(401).json(err)
    }
}