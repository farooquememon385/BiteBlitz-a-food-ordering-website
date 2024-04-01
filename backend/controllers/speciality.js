const Speciality = require('../models/speciality')

const addSpeciality = async (req, resp) =>{
  const {title, description} = req.body
  try{
    const speciality = await Speciality.create({ title, description })
    res.status(200).json(speciality)
  } catch (error){
    res.status(400).json({error: error.message})
  }
}

const getSpecialities = async (req, res) => {
  try {
    const categories = await Speciality.find({}).sort({createdAt: -1})
    console.log(categories)
    res.status(200).json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error.message);
    res.status(500).json({ message: error.message });
  }
}

const getSpeciality = async (req, res) =>{
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "no such speciality found"})
    }
    const user = await Speciality.findById(id)
    if(!user){
        return res.status(404).json({error: "no such speciality found"})
    }
    res.status(200).json(user)
}

const deleteSpeciality = async (req, res) =>{
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "no such speciality found"})
    }
    const user = await Speciality.findOneAndDelete({_id: id})
    if(!user){
        return res.status(404).json({error: "no such speciality found"})
    }
    res.status(200).json(user)
}


const updateSpeciality = async (req, res) =>{
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "no such speciality found"})
    }
    const user = await User.findOneAndUpdate(
        {_id: id},
        {...req.body}
        )
    if(!user){
        return res.status(404).json({error: "no such speciality found"})
    }
    res.status(200).json(user)
}

  module.exports = {
    addSpeciality,
    getSpecialities,
    getSpeciality,
    deleteSpeciality,
    updateSpeciality
  }