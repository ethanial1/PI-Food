import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRecipesByName } from '../../Redux/Actions/actions';
import st from './NavBar.module.css';

const validate = nombre => {
    const err = {}

    if(!nombre.trim()) {
        err.nombre = 'Nombre de receta requerido'
    }

    return err
}

const SearchBar = () => {
    const [nombre, setNombre] = useState('');
    const [errores, setErrores] = useState({});
    const dispatch = useDispatch()

    const handleChange = e => {
        setNombre(e.target.value)
        setErrores(validate(nombre))
    }

    const handleBlur = nombre => {
        setErrores(validate(nombre))
    } 

    const handleSubmit = e => {
        e.preventDefault()
        setErrores(validate(nombre))
        if(Object.keys(errores).length === 0) {
            dispatch(getRecipesByName(nombre))
            setNombre('')
        }
    }
    return (
        <div className={st.search}>
            <form onSubmit={e => handleSubmit(e)}>
                <input type="text" name="name" id="name" placeholder='Buscar por nombre' value={nombre} onChange={handleChange} onBlur={e => handleBlur(e.target.value)}/>
                <button type="submit">
                    <i className='bx bx-search-alt'></i>
                </button>
            </form>
            {errores.nombre && <span>{errores.nombre}</span>}
        </div>
    )
};

export default SearchBar;
