import React from 'react';
import st from './NavBar.module.css';
import Select from './Select';

const NavBar = () => {
    return (
        <nav className={st.navbar}>
           <div className={st.container}>
                <div>
                    <h1>Chef Casero</h1>
                </div>
                <div>
                    <div className={st.filtros}>
                        <Select titulo="Orden Alfabetico" arrayItems={["A - Z","Z - A"]}/>
                        <Select titulo="Puntuación" arrayItems={["Points","Lowest to highest score", "Highest to lowest score"]}/>
                        <Select titulo="Tipo de Dieta" arrayItems={["Vegetariana"]}/>
                    </div>
                    <div className={st.search}>
                        <input type="text" name="search" id="search" placeholder='Buscar por nombre'/>
                        <button>buscar</button>
                    </div>
                </div>
           </div>
        </nav>
    )
};

export default NavBar;
