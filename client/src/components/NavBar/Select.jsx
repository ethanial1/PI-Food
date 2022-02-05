import React from 'react';
import st from './Select.module.css';

const Select = ({titulo, arrayItems, cb}) => {
    return (
        <div className={st.select}>
            <details>
                <summary>{titulo}</summary>
                <ul>
                   {
                       arrayItems.map((ele, index) => (<li key={index}>{ele}</li>))
                   }
                </ul>
            </details>
        </div>
    )
};

export default Select;
