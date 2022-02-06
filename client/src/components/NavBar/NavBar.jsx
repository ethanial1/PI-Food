import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRecipesByName } from '../../Redux/Actions/actions';
import st from './NavBar.module.css';
import Select from './Select';

const NavBar = () => {
    const [nameRecipe, setNameRecipe] = useState('');
    const [types, setTypes] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
      fetch("http://localhost:3001/types")
      .then(res => res.json())
      .then(json => setTypes(json));

    }, []);
    

    const handleClick = () => {
        dispatch(getRecipesByName(nameRecipe));
    }

    // TODO hacer funcionar los 3 filtro implemetados 
    return (
        <nav className={st.navbar}>
           <div className={st.container}>
                <div>
                    <h1>Chef Casero</h1>
                </div>
                <div>
                    <div className={st.filtros}>
                        <Select titulo="Orden Alfabetico" arrayItems={[{id: 1, nombre: "A - Z"},{id: 2, nombre: "Z - A"}]}/>
                        <Select titulo="Puntuación" arrayItems={[{id: 1, nombre: "Points"},{id: 2, nombre:"Lowest to highest score"},{id:3, nombre:"Highest to lowest score"}]}/>
                        <Select titulo="Tipo de Dieta" arrayItems={types}/>
                    </div>
                    <div className={st.search}>
                        <input type="text" name="search" id="search" placeholder='Buscar por nombre' value={nameRecipe} onChange={(e) => setNameRecipe(e.target.value)}/>
                        <button onClick={handleClick}>buscar</button>
                    </div>
                </div>
           </div>
        </nav>
    )
};

export default NavBar;
