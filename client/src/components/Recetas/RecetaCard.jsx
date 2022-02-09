import React from 'react';
import { NavLink } from 'react-router-dom';
import st from './RecetaCard.module.css';

const RecetaCard = ({id, titulo, tipos, img}) => {
    return (
         <div className={st.card} onClick={() => console.log(titulo)}>
            <NavLink to={`/details/${id}`}>
                <img src={img} alt={titulo} />
                <div className={st.info}>
                    <div className={st.titulo}>
                        <h3>{titulo}</h3>
                    </div>
                    <ul className={st.tipos}>
                        {
                            tipos?.map((tipo, index) => (<li key={index}>{tipo}</li>))
                        }
                    </ul>
                </div>
                </NavLink>
            </div>
    )
};

export default RecetaCard;
