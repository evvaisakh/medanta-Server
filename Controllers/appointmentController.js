const appointments = require('../Models/appointmentModel')

// book appointment
exports.bookAppoint = async (req, res) => {
    console.log("Inside Book Appointment request");
    console.log(req.payload);
    console.log(req.body);
    const { name, email, phone, age, gender, appointmentDate, department, doctor, remarks } = req.body
    const userId = req.payload
    try {
        const booking = new appointments({
            name, email, phone, age, gender, appointmentDate, department, doctor, remarks, userId
        })
        await booking.save()
        res.status(200).json(booking)
    } catch (err) {
        res.status(401).json(err)
    }
}

// get all appointments
exports.getAllAppointments = async (req, res) => {
    try {
        const allAppointments = await appointments.find()
        res.status(200).json(allAppointments)
    } catch (err) {
        res.status(401).json(err)
    }
}

// get user appointments
exports.getUserAppointments = async (req, res) => {
    const userId = req.payload
    try {
        const userAppointments = await appointments.find({ userId })
        res.status(200).json(userAppointments)
    } catch (err) {
        res.status(401).json(err)
    }
}

