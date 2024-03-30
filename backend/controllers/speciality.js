const Speciality = require('../models/speciality')

const addSpeciality = async (req, resp) =>{
    const {title, description} = req.body
  
    try{
      const speciality = await Speciality.create({title, description})
      res.status(200).json(speciality)
    } catch (error){
      res.status(400).json({error: error.message})
    }
  }

  module.exports = {
    addSpeciality
  }