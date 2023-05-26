
import React from 'react'
import Nav1 from './Units/Nav1';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Additem from './Pages/Additem';
import { Routes, Route } from "react-router-dom";



export default function App() {
  return (
    <div>
    <Nav1 />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Additem />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      
    </div>
  );
}

