import React from 'react';
import st from './Select.module.css';

const Select = ({titulo, arrayItems, cb}) => {
    return (
        <div className={st.select}>
            <details>
                <summary>{titulo}</summary>
                <ul>
                   {
                       arrayItems.map(ele => (<li key={ele.id}>{ele.nombre}</li>))
                   }
                </ul>
            </details>
        </div>
    )
};

export default Select;
