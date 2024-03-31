const express = require('express')
const router = express.Router()

const { addSpeciality , getSpeciality} = require('../controllers/speciality')

// Route to fetch categories
router.get('/', getSpeciality);

router.get('/:id', (req, resp) =>{
    resp.status(200).json({msg: "Get specific Category"})
})

router.post('/', addSpeciality)

router.delete('/:id', (req, resp) =>{
  resp.status(200).json({msg: "Delete a Category"})
})

router.patch('/:id', (req, resp) =>{
  resp.status(200).json({msg: "Update a specific Category"})
})

module.exports = router