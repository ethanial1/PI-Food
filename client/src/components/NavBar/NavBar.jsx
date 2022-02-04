import React from 'react';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <select name="tiposReceta">
                        <optgroup label='Tipos de Dieta'>
                            <option value="0">All</option>
                            <option value="1">Gluten Free</option>
                        </optgroup>
                    </select>
                </li>
            </ul>
        </nav>
    )
};

export default NavBar;
