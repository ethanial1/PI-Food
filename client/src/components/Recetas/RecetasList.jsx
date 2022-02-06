import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import RecetaCard from './RecetaCard';
import { getAllRecipes } from '../../Redux/Actions/actions';
import st from './Recetas.module.css';

const RecetasList = () => {
    const allRecipes = useSelector(state => state.allRecipes)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllRecipes());
    }, [dispatch])
    
    if(!allRecipes.length) return null;

    // TODO: realizar el paginado de recetas
    return (
        <section className={st.wrapper}>
            {
                allRecipes.map(recipe => (<RecetaCard key={recipe.id} titulo={recipe.name} img={recipe.img} tipos={recipe.diets}/>))
            }
        </section>
    )
};

export default RecetasList;
