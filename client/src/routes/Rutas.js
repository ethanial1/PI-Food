import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../views/Home/Home';
import Landing from '../views/Landing/Landing';

const Rutas = () => {
  // TODO establecer la ruta para crear una nueva receta y ver los detalle de la receta,
  // también los componentes de cada una
  return (
    <Routes>
      <Route exact path='/' element={<Landing />}/>
      <Route exact path='/home' element={<Home />} />
    </Routes>
  )
};

export default Rutas;
