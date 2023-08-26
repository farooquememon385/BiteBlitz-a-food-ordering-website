import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
function App() {
  return (
    <React.Fragment>
    <Navbar/>
    <Main/>
    <Footer/>
    </React.Fragment>
  );
}

export default App;
