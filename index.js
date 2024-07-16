require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Routes/router')
require('./DB/connection')

const hmsServer = express()

hmsServer.use(cors())
hmsServer.use(express.json())
hmsServer.use(router)
hmsServer.use('/uploads', express.static('./uploads'))

const PORT = 3000 || process.env.PORT

hmsServer.listen(PORT, () => {
    console.log(`Hospital Management System Server Started at Port:${PORT}`);
})

// http://localhost:3000/
hmsServer.get("/", (req, res) => {
    res.status(200).send(`<h1 style="color:red">Hospital Management System Server Started and awaiting for client request!!!</h1>`)
})