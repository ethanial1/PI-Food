import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTypesRecipe } from '../../Redux/Actions/actions'

const Types = ({onChange, onClick, diets}) => {
    const types = useSelector(state => state.types)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTypesRecipe())
    }, [dispatch])
    

    return (
        <>
            <div>
                <select name="tipos" id="tipos" defaultValue='default'>
                    <option value="default">Tipos de Dieta</option>
                    {
                        types.length > 0 ? types.map(type => (<option key={type.id} value={type.nombre}>{type.nombre}</option>)) : <option>Loading....</option>
                    }
                </select>
            </div>
            <div>
                <ul>
                    {
                        diets.map(dieta => (
                            <li key={dieta.key}>
                                <span>{dieta.nombre}</span>
                                <button onClick={() => onclick(dieta.id)}>X</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Types