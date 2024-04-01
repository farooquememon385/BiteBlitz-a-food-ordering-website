import React from 'react';
import { useEffect, useState } from 'react';
import HomeImage from '../images/home-img.png'
import Step1 from '../images/step-1.jpg'
import Step2 from '../images/step-2.jpg'
import Step3 from '../images/step-3.jpg'
import Step4 from '../images/step-4.jpg'

const Home = () => {
  const [spcialities, setSpeciality] = useState([])
  useEffect(()=>{
    const fetchHome = async () => {
      const response = await fetch('http://localhost:4000/speciality')
      if(response.ok){
        const json = await response.json();
        setSpeciality(json)
      }
      else{
        console.log("response is not Ok")
      }
    }
    fetchHome()
  }, [])
  console.log(spcialities)

  return (
    <div>
      <section className="home" id="home">
        <div className="content">
          <h3>FOOD MADE WITH LOVE</h3>
          <p>
            
          </p>
        </div>
        <div className="image">
          <img src= {HomeImage} alt="Home Image" />
        </div>
      </section>

      {/* Steps section */}
      <div className="step-container">
        <h1 className="heading">how it <span>works</span></h1>
        <section className="steps">
          <div className="box">
            <img src={Step1} alt="" />
            <h3>choose your favorite food</h3>
          </div>
          <div className="box">
            <img src={Step2} alt="" />
            <h3>free and fast delivery</h3>
          </div>
          <div className="box">
            <img src={Step3} alt="" />
            <h3>easy payments methods</h3>
          </div>
          <div className="box">
            <img src={Step4} alt="" />
            <h3>and finally, enjoy your food</h3>
          </div>
        </section>
      </div>
      {/* Scroll top button */}

      <a href="#home" className="fas fa-angle-up" id="scroll-top">Top</a>

      {/* Loader */}
      {/* <div className="loader-container">
        <img src={loaderImg} alt="" />
      </div> */}

      {/* External JS might still be referenced here if necessary for functionality not handled by React */}
    </div>
  );
}

export default Home;