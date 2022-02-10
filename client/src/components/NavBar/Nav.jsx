import React from 'react';
import { NavLink } from 'react-router-dom'
import img from '../../assets/logoBlack.png';
import st from './NavBar.module.css'

const Nav = () => {
    return (
        <nav className={st.nav}>
            <button>
                <img src={img} alt="" />
            </button>
            <ul>
                <li>
                    <NavLink to='/home'>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to='/create'>Crear</NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default Nav;
