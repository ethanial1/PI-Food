import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { orderByName } from '../../Redux/Actions/actions';

const NavBar = () => {
    const [nombre, setNombre] = useState('');
    const [errores, setErrores] = useState({});
    const [ordenBy, setOrdenBy] = useState('');
    const dispatch = useDispatch()

    const handleSort = e => {
        dispatch(orderByName(e.target.value))
        setOrdenBy(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()

        if(!nombre.trim()) {
            setErrores({nombre:"Nombre de receta requerido"})
            return
        }

        if(Object.keys(errores).length === 0) {
            dispatch()
        }
    }

    return (
        <nav>
            <div>img</div>
            <div>
                <div>
                    <form onSubmit={e => handleSubmit(e)}>
                        <input type="text" name="name" id="name" placeholder='Buscar por nombre' value={nombre} onChange={e => setNombre(e.target.value)}/>
                        {errores.nombre && <span>{errores.nombre}</span>}
                        <button type="submit">
                            <i className='bx bx-search-alt'></i>
                        </button>
                    </form>
                </div>
                <div>
                    <div>
                        <span>{ordenBy}</span>
                        <select name="sort" id="sort" onChange={e => handleSort(e)}>
                            <option disabled>Order</option>
                            <option value="ASC">A - Z</option>
                            <option value="DESC">Z - A</option>
                        </select>
                        <select name="points" id="points" onChange={e => handleSort(e)}>
                            <option value="">Lowest to highest score</option>
                            <option value="">Highest to lowest score</option>
                        </select>
                    </div>
                    <div>
                        <ul>
                            <li>Dieta 1</li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default NavBar;


