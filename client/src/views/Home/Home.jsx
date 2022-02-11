import React from 'react';
import AllRecipes from '../../components/Recetas/AllRecipes';
import st from './Home.module.css'
import imgIzqu from '../../assets/izquierda.svg'
import imgDerch from '../../assets/derecha.svg'
import Actions from '../../components/NavBar/Actions';
import Nav from '../../components/NavBar/Nav';

const Home = () => {
  return (
    <>
      <Nav />
      <Actions />
      <div className={st.home}>
        <img src={imgIzqu} alt="izquierda" className={st.img_izq}/>
        <AllRecipes />
        <img src={imgDerch} alt="derecha" className={st.img_der}/>
      </div>
    </>
  )
};

export default Home;
