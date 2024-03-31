const {Title, User} = require('../models/user')
const mongoose = require('mongoose')

const getUsers = async (req, res) => {
    const users = await User.find({}).sort({createdAt: -1})
    res.status(200).json(users)
}

const getUser = async (req, res) =>{
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "no such user found"})
    }
    const user = await User.findById(id)
    if(!user){
        return res.status(404).json({error: "no such user found"})
    }
    res.status(200).json(user)
}

const addUser = async (req, res) => {

    const {firstName, lastName, email, phoneNumber, username, password} = req.body

    try{
        const user = User.create({firstName, lastName, email, phoneNumber, username, password, title: "Customer"})
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deleteUser = async (req, res) =>{
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "no such user found"})
    }
    const user = await User.findOneAndDelete({_id: id})
    if(!user){
        return res.status(404).json({error: "no such user found"})
    }
    res.status(200).json(user)
}


const updateUser = async (req, res) =>{
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "no such user found"})
    }
    const user = await User.findOneAndUpdate(
        {_id: id},
        {...req.body}
        )
    if(!user){
        return res.status(404).json({error: "no such user found"})
    }
    res.status(200).json(user)
}

module.exports = {
addUser,
getUsers,
getUser,
deleteUser,
updateUser
}
