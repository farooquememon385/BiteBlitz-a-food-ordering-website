const express = require('express')
const router = express.Router()

const {Title, Person} = require('../models/user')

router.get('/', (req, res)=>{
    res.json({msg:"get all users"})
})

module.exports = router