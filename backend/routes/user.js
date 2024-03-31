const express = require('express')
const router = express.Router()

const { addUser, getUsers, getUser, deleteUser, updateUser } = require('../controllers/user')

router.post('/', addUser)

router.get('/', getUsers)

router.get('/:id', getUser)

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)

module.exports = router