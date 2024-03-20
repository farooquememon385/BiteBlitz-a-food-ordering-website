require('dotenv').config()

const express = require('express')

// use postman to test APIs

const app = express()

// Middle ware
app.use((req, resp, next) => {
    console.log(req.path, req.method)
    next()
})

app.get('/', (req, resp) =>{
    resp.json({msg: "Welcome to food ordering website"})
})

app.listen(process.env.PORT, () => {
    console.log('server is listening on Port:', process.env.PORT)
})