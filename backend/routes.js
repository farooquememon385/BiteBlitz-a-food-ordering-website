const express = require('express')

const router = express.Router()

// Route to fetch categories
router.get('/categories', (req, res) => {
    try {
      // Sample data (replace with your actual data)
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
        },
        // Add more sample data as needed
      ];
      res.status(200).json(categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });

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