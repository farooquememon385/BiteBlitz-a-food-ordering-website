import React, { useState, useEffect } from 'react';

const Speciality = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://localhost:4000/categories');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <section className="speciality" id="speciality">
      <h1 className="heading"> Our <span>Speciality</span> </h1>
      <a href="/addcategory" className="btn">Add New Category</a>
      <div className="box-container">
        {categories.map(category => (
          <div className="box" key={category.categoryID}>
            <a href={`/categoryitems?id=${category.categoryID}`}>
              <img className="image" src={category.picPath || "images/defaultcategory.jpg"} alt="" />
            </a>
            <div className="content">
              <img src="images/s-6.png" alt="" />
              <h3>{category.categoryName}</h3>
              <p>{category.description || "RETRO gives you best place to enjoy your Fresh Foods with your family. Innovative shakes that suits with your taste which comprises in health and hygiene."}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Speciality;
