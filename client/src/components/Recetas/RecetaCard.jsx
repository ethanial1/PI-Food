import React from 'react';
import st from './RecetaCard.module.css';

const RecetaCard = () => {
    return (
        <div className={st.card}>
            <img src="https://spoonacular.com/recipeImages/715497-312x231.jpg" alt="plato 1" />
            <div className={st.info}>
                <h3>Arraz con leche</h3>
                <ul>
                    <li>Tipo1</li>
                </ul>
            </div>
            <div className={st.docu}>
                <button>p</button>
            </div>
        </div>
    )
};

export default RecetaCard;
