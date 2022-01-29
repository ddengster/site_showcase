import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-router-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './landing/Login';
import Landing from './landing/Landing';
import About from './landing/About';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Landing/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
