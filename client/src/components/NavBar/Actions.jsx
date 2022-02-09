import React from 'react';
import Filtros from './Filtros';
import st from './NavBar.module.css'
import SearchBar from './SearchBar';

const Actions = () => {
    return (
        <div className={st.actions}>
            <SearchBar />
            <Filtros />
        </div>
    )
};

export default Actions;
