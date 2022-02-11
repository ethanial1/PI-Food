import React from 'react';
import { NavLink } from 'react-router-dom'
import img from '../../assets/logo.png';
import st from './NavBar.module.css'

const Nav = () => {

    return (
        <nav className={st.nav}>
            <ul>
                <li className={st.link}>
                    <NavLink to='/myrecetas'>Mis Recetas</NavLink>
                </li>
                <li>
                    <NavLink to='/home'>
                        <img src={img} alt="" />
                    </NavLink>
                </li>
                <li className={st.link}>
                    <NavLink to='/create'>Crear</NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default Nav;
