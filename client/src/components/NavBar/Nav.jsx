import React from 'react';
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import img from '../../assets/logo.png';
import { getAllRecipes } from '../../Redux/Actions/actions';
import st from './NavBar.module.css'

const Nav = () => {
    const dispatch = useDispatch()

    return (
        <nav className={st.nav}>
            <ul>
                <li>
                    <NavLink to='/home' onClick={() => dispatch(getAllRecipes())}>
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
