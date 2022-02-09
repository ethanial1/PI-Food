import React from 'react';

const Paginado = ({recipesPerPage, allRecipes, paginado}) => {

    const pagNumbers = []

    for(let i = 1; i <= Math.ceil(allRecipes / recipesPerPage); i++) {
        pagNumbers.push(i)
    }

    return (
        <nav>
            <ul>
                {
                    pagNumbers && pagNumbers.map(number => (
                        <li key={number}>
                            <button onClick={() => paginado(number)}>{number}</button>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
};

export default Paginado;
