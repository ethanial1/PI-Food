import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRecipesByName } from '../../Redux/Actions/actions';
import st from './NavBar.module.css';

const SearchBar = () => {
    const [nombre, setNombre] = useState('');
    const [errores, setErrores] = useState({});
    const dispatch = useDispatch()


    const handleSubmit = e => {
        e.preventDefault()

        if(!nombre.trim()) {
            setErrores({nombre:"Nombre de receta requerido"})
            return
        }

        if(Object.keys(errores).length === 0) {
            dispatch(getRecipesByName(nombre))
            setNombre('')
        }
    }
    return (
        <div className={st.search}>
            <form onSubmit={e => handleSubmit(e)}>
                <input type="text" name="name" id="name" placeholder='Buscar por nombre' value={nombre} onChange={e => setNombre(e.target.value)}/>
                {errores.nombre && <span>{errores.nombre}</span>}
                <button type="submit">
                    <i className='bx bx-search-alt'></i>
                </button>
            </form>
        </div>
    )
};

export default SearchBar;
