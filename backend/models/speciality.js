const mongoose = require('mongoose')

const Schema = mongoose.Schema

const specialitySchema = new Schema(
    {
        title : {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }, 
    {
        timestamps:true
    }
)

const Speciality = mongoose.model('Speciality', specialitySchema)

module.exports = Speciality