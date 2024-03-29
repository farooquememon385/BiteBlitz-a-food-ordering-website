// for accessing/allowing requests to backend
const cors = require('cors');

// to use env variables
require('dotenv').config()

// // // //  use postman to test APIs // // // 
const mongoose = require('mongoose')
const express = require('express')
const app = express()


const specialityRoutes = require('./routes/speciality')

app.use(cors());

// to get request data and attach to req object
app.use(express.json())

// app.use(cors({
//     origin: 'http://localhost:3000',
//     origin: 'http://localhost:3000/categories'  // Allow only this origin to access the resources
//   }));


app.use('/speciality',specialityRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT, () => {
        console.log('database connected & server is listening on Port:', process.env.PORT)
    })
})
.catch((error)=>{
    console.log(error)
})

/**
 * => API Endpoints
 * GET
 * POST
 * DELETE
 * PATCH
 */