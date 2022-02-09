import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import AllRecipes from '../../components/Recetas/AllRecipes';
import st from './Home.module.css'
import imgIzqu from '../../assets/izquierda.svg'
import imgDerch from '../../assets/derecha.svg'

const Home = () => {
  return (
    <div className={st.home}>
      <img src={imgIzqu} alt="izquierda" className={st.img_izq}/>
      <NavBar />
      <AllRecipes />
      <img src={imgDerch} alt="derecha" className={st.img_der}/>
    </div>
  )
};

export default Home;
