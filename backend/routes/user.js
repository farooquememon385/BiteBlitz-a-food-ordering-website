const express = require('express')
const router = express.Router()

const { addUser, getUsers, getUser } = require('../controllers/user')

router.get('/', getUsers)

router.get('/:id', getUser)

router.post('/', addUser)

module.exports = router