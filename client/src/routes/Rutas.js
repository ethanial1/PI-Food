import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from '../components/NavBar/Nav';
import Details from '../components/Recetas/Details';
import FormCreate from '../components/Recetas/FormCreate';
import Home from '../views/Home/Home';
import Landing from '../views/Landing/Landing';

const Rutas = () => {
  return (
    <>
      <Nav/>
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/create' element={<FormCreate />}/>
        <Route path='/details/:id' element={<Details />} />
      </Routes>
    </>
    
  )
};

export default Rutas;
