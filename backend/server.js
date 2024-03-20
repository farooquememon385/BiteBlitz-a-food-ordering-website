require('dotenv').config()

const express = require('express')
const routes = require('./routes')
// use postman to test APIs

const app = express()

// Middle ware
app.use((req, resp, next) => {
    console.log(req.path, req.method)
    next()
})

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