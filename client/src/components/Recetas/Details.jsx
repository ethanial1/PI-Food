import React,{ useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';
import { getDetailsRecipe } from '../../Redux/Actions/actions';
import st from './Details.module.css'
import Nav from '../NavBar/Nav';

const Details = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const recipeDetails = useSelector(state => state.recipeDetails)

    useEffect(() => {
        dispatch(getDetailsRecipe(id))
    }, [dispatch, id]);
    
    return (
        <>
        <img src={recipeDetails.img} alt="imagen receta" className={st.back}/>
        <section className={st.glass}>
                <Nav />
            <div className={st.details}>
                <div className={st.head}>
                    <div>
                        <img src={recipeDetails.img} alt={recipeDetails.img} />
                    </div>
                    <div>
                        <h2>{recipeDetails.name}</h2>
                        <div className={st.attributes}>
                            <h4>score <span>{recipeDetails.score}</span></h4>
                            <h4>healthyscore <span>{recipeDetails.healthScore}</span></h4>
                            <h5>{recipeDetails.diets?.join(', ')}</h5>
                        </div>
                    </div>
                </div>
                <div className={st.info}>
                    <div>
                        <h3>Sumary</h3>
                        {parse(`${recipeDetails.summary}`)}
                    </div>
                    <div>
                        <h3>Instructions</h3>
                        {parse(`${recipeDetails.instructions}`)}
                    </div>
                </div>
            </div>
        </section>
        </>
    )
};

export default Details;
