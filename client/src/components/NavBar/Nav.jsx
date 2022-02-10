import React from 'react';
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import img from '../../assets/logoBlack.png';
import st from './NavBar.module.css'
import { getAllRecipes } from '../../Redux/Actions/actions';

const Nav = () => {
    const dispatch = useDispatch()


    const handleReset = () => {
        dispatch(getAllRecipes())
    }
    return (
        <nav className={st.nav}>
            <button onClick={handleReset}>
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
