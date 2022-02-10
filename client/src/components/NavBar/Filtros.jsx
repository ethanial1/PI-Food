import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTypesRecipe, orderByName, orderByPoints, sortRecipesBy } from '../../Redux/Actions/actions';
import st from './NavBar.module.css'

const Filtros = () => {
    const dispatch = useDispatch()
    const types = useSelector(state => state.types)

    useEffect(() => {
        dispatch(getTypesRecipe())
    }, [dispatch])
    

    // const handleSort = e => {
    //     dispatch(orderByName(e.target.value))
    // }

    // const handleSortPoints = e => {
    //     dispatch(orderByPoints(e.target.value))
    // }

    const handleSortDiet = e => {
        dispatch(sortRecipesBy(e.target.value))
    }

    return (
        <div className={st.filtros}>
            <div>
                <select name="sort" id="sort" onChange={e => handleSortDiet(e)}>
                    <option value="alp-ASC">A - Z</option>
                    <option value="alp-DESC">Z - A</option>
                </select>
                <select name="points" id="points" onChange={e => handleSortDiet(e)}>
                    <option value="points-ASC">Lowest to highest score</option>
                    <option value="points-DESC">Highest to lowest score</option>
                </select>
                <select name="diets" id="diets" onChange={e => handleSortDiet(e)}>
                    {
                        types.length > 0 ? types.map(type => (<option key={type.id} value={type.nombre}>{type.nombre}</option>)) : <option>Loading....</option>
                    }
                </select>
            </div>
        </div>
    )
};

export default Filtros;
