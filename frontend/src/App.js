import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/navbar';
import Footer from './components/Footer.';
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
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
