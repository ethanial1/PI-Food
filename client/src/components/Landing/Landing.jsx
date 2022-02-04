import React from 'react';
import st from './Landing.module.css';
import img from '../../assets/g.svg';
import { NavLink } from 'react-router-dom';

const Landing = () => {
    return (
        <section className={st.container}>
            <img src={img} alt="recetas" />
           <div className={st.landing}>
                <h1>chef casero</h1>
                <span>El placer de los banquetes debe medirse no por la abundancia de los manjares, sino por la reunión de los amigos y por su conversación. <cite>(Cicerón)</cite></span>
                <NavLink to='/home' className={st.btn}>
                    <span>Home</span>
                </NavLink>
           </div>
        </section>
    )
};

export default Landing;
