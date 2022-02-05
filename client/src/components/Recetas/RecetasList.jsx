import React from 'react';
import RecetaCard from './RecetaCard';
import st from './Recetas.module.css';

const RecetasList = () => {
    return (
        <section className={st.wrapper}>
            <RecetaCard />
            <RecetaCard />
            <RecetaCard />
            <RecetaCard />
        </section>
    )
};

export default RecetasList;
