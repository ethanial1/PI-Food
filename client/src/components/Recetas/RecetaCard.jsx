import React from 'react';
import st from './RecetaCard.module.css';

const RecetaCard = ({titulo, tipos, img}) => {
    return (
        <div className={st.card} onClick={() => console.log(titulo)}>
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
        </div>
    )
};

export default RecetaCard;
