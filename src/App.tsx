import logo from './logo.svg';
import './App.css';
import 'react-router-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './landing/Login';
import Landing from './landing/Landing';
import About from './landing/About';
import ControlPanel from './control/ControlPanel';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Landing/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/dashboard" element={<ControlPanel/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
