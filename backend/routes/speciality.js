const express = require('express')
const router = express.Router()

const { addSpeciality, getSpecialities, getSpeciality, deleteSpeciality, updateSpeciality } = require('../controllers/speciality')

// Route to fetch categories
router.get('/', getSpecialities);

router.get('/:id', getSpeciality)

router.post('/', addSpeciality)

router.delete('/:id', deleteSpeciality)

router.patch('/:id', updateSpeciality)

module.exports = router