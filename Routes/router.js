const express = require('express')
const userController = require('../Controllers/userController')
const appointmentController = require('../Controllers/appointmentController')
const adminController = require('../Controllers/adminController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const multerConfig = require('../Middlewares/multerMiddleware')

const router = new express.Router()

//register route
router.post('/register', userController.register)
// login route
router.post('/login', userController.login)
// book appointment route
router.post('/book-appointment', jwtMiddleware, appointmentController.bookAppoint)
// get all appointments
router.get('/all-appointment', appointmentController.getAllAppointments)
// get user appointments
router.get('/user-appointment', jwtMiddleware, appointmentController.getUserAppointments)
// add doctor by admin
router.post('/add-doctor', multerConfig.single('docImage'), adminController.addDoctor)
//get all doctor
router.get('/all-doctor', adminController.getAllDoctors)
//edit doctor by admin
router.put('/edit-doctor/:docId', jwtMiddleware, multerConfig.single('docImage'), adminController.editDoctor)
// remove doctor by admin
router.delete('/remove-doctor/:docId', jwtMiddleware, adminController.removeDoctor)
// get doctor and department
router.get('/doc-dep', adminController.getDocAndDep)
// send message
router.post('/send-message', adminController.sendMessage)
// get all messages
router.get('/all-message', jwtMiddleware, adminController.getAllMessages)
// delete message
router.delete('/delete-message/:msgId', jwtMiddleware, adminController.deleteMessage)

module.exports = router