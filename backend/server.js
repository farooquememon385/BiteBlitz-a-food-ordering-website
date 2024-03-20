require('dotenv').config()

const express = require('express')

const app = express()

app.get('/', (req, resp) =>{
    resp.json({msg: "Welcome to food ordering website"})
})

app.listen(process.env.PORT, () => {
    console.log('server is listening on Port:', process.env.PORT)
})