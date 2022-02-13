import React from 'react';
import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRecipes } from '../../Redux/Actions/actions';
import Paginado from '../Paginado/Paginado';
import RecetaCard from './RecetaCard';

import st from './Recetas.module.css'

const AllRecipes = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { allRecipes, recipesFiltered } = useSelector(state => state);
    const dispatch = useDispatch();

    const lastPage = currentPage * 9;
    const firstIndex = lastPage - 9;
    const currentRecipes = recipesFiltered.length > 0 ? recipesFiltered.slice(firstIndex, lastPage) : allRecipes.slice(firstIndex, lastPage);

    useEffect(() => {
        dispatch(getAllRecipes())
    }, [dispatch]);

    const handlePaginado = pagNumber => setCurrentPage(pagNumber)

    return (
        <>
            <section className={st.wrapper}>
                {
                
                    currentRecipes.map(recipe => (
                        <RecetaCard 
                            key={`${recipe.id}`}
                            id={recipe.id}
                            titulo={recipe.name}
                            tipos={recipe.diets}
                            img={recipe.img}/>
                    ))
                    
                }
            </section>
            <Paginado 
                recipesPerPage={9}
                allRecipes={ recipesFiltered.length > 0 ? recipesFiltered.length : allRecipes.length}
                paginado={handlePaginado}
            />
        </>
    )
};

export default AllRecipes;
