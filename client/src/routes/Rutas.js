import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home/Home';
import Landing from '../components/Landing/Landing';

const Rutas = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />}/>
      <Route path='/home' element={<Home />} />
    </Routes>
  )
};

export default Rutas;
