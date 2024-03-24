import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer.';
import Login from './components/Login';
import Register from './components/Register';
import Speciality from './components/Speciality';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route 
        path='/'
        element={<Home/>}
        />
        <Route 
        path='/speciality'
        element={<Speciality/>}
        />
        <Route 
        path='/login'
        element={<Login/>}
        />
        <Route 
        path='/register'
        element={<Register/>}
        />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
