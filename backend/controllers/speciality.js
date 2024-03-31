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

  const getSpeciality = (req, res) => {
    try {
      const categories = [
        {
          categoryID: 1,
          picPath: "path/to/image1.jpg",
          description: "Description for category 1",
          categoryName: "Category 1"
        },
        {
          categoryID: 2,
          picPath: "path/to/image2.jpg",
          description: "Description for category 2",
          categoryName: "Category 2"
        }
      ];
      res.status(200).json(categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
      res.status(500).json({ message: 'Server error' });
    }
  }

  module.exports = {
    addSpeciality,
    getSpeciality
  }