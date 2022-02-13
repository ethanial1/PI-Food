import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTypesRecipe } from '../../Redux/Actions/actions'

import st from './FormCreate.module.css'

const Types = ({handleRemoveType, handleAddType, diets }) => {
    let types = useSelector(state => state.types)
    //const [arrayTypes, setArrayTypes] = useState(types)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTypesRecipe())
    }, [dispatch])
    

    const handleChange = e => {
        const id = parseInt(e.target.value)
        const obj = types.find(type => type.id === id);
        
        //setArrayTypes(arrayTypes.filter(type => type.id !== id))
        handleAddType(obj)
    }
    

    return (
        <>
            <div className={st.types_select}>
                <select name="tipos" id="tipos" defaultValue='default' onChange={handleChange}>
                    <option value='default' disabled>Tipos de Dieta</option>
                    {
                        types.length > 0 ? types.map(type => (<option key={type.id} value={type.id}>{type.nombre}</option>)) : <option>Loading....</option>
                    }
                </select>
            </div>
            <div>
                <ul>
                    {
                        diets.map(dieta => (
                            <li key={dieta.id}>
                                <span>{dieta.nombre}</span>
                                <button onClick={() => handleRemoveType(dieta.id)}>X</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Types