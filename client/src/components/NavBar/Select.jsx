import React from 'react';
import st from './Select.module.css';

const Select = () => {
    return (
        <div className={st.select}>
            <details>
                <summary>Test Dropdown</summary>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                    <li>Item 5</li>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                    <li>Item 5</li>
                </ul>
            </details>
        </div>
    )
};

export default Select;
