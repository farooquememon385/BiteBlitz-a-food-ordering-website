const express = require('express')

const router = express.Router()

router.get('/', (req, resp) =>{
    resp.status(200).json({msg: "Welcome to food ordering website"})
})

router.get('/:id', (req, resp)=>{
    resp.json("Get a single data")
})

router.post('/', (req, resp)=>{
    
})

router.delete('/:id', (req, resp) => {

})

router.patch('/:id', (req, resp)=>{

})

module.exports = router