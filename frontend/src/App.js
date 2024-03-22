import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <navbar/>
      <Routes>
        <Route 
        path='/'
        element={<Home/>}
        />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
