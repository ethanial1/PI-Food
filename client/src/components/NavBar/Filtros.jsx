import React from 'react';
import { useDispatch } from 'react-redux';
import { orderByName } from '../../Redux/Actions/actions';
import st from './NavBar.module.css'

const Filtros = () => {
    const dispatch = useDispatch()

    const handleSort = e => {
        dispatch(orderByName(e.target.value))
    }

    return (
        <div className={st.filtros}>
            <div>
                <select name="sort" id="sort" onChange={e => handleSort(e)}>
                    <option value="ASC">A - Z</option>
                    <option value="DESC">Z - A</option>
                </select>
                <select name="points" id="points" onChange={e => handleSort(e)}>
                    <option value="">Lowest to highest score</option>
                    <option value="">Highest to lowest score</option>
                </select>
                <select name="diets" id="diets">
                    <option value="dieta 1">Dieta 1</option>
                </select>
            </div>
        </div>
    )
};

export default Filtros;
