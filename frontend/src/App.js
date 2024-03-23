import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/navbar';
import Footer from './components/Footer.';
import Login from './components/login';
import Register from './components/Register';
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
