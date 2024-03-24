require('dotenv').config()

const express = require('express')
// for accessing/allowing requests to backend
const cors = require('cors');

const routes = require('./routes')
// use postman to test APIs

const app = express()


app.use(cors());
// app.use(cors({
//     origin: 'http://localhost:3000',
//     origin: 'http://localhost:3000/categories'  // Allow only this origin to access the resources
//   }));
  

app.use(routes)


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