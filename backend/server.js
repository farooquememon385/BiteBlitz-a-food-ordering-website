// for accessing/allowing requests to backend
const cors = require('cors');

// to use env variables
require('dotenv').config()

// // // //  use postman to test APIs // // // 

const specialityRoutes = require('./routes/speciality')

const express = require('express')

const app = express()

app.use(cors());

// to get request data and attach to req object
app.use(express.json())

// app.use(cors({
//     origin: 'http://localhost:3000',
//     origin: 'http://localhost:3000/categories'  // Allow only this origin to access the resources
//   }));


app.use('/speciality',specialityRoutes)

app.listen(process.env.PORT, () => {
    console.log('server is listening on Port:', process.env.PORT)
})

/**
 * => API Endpoints
 * GET
 * POST
 * DELETE
 * PATCH
 */