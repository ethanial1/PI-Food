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
                    <div className={st.search}>
                        <button>buscar</button>
                        <input type="text" name="search" id="search" />
                    </div>
                    <div className={st.filtros}>
                        <Select />
                    </div>
                </div>
           </div>
        </nav>
    )
};

export default NavBar;
