import React from 'react';
import st from './SideBar.module.css';
import img from '../../assets/logoWhite.png';

const SideBar = () => {
    return (
        <aside className={st.sidebar}>
            <div className={st.logo}>
                <img src={img} alt="chef casero" />
            </div>
            <div className={st.search}>
                <h3>Find the best recipe for you</h3>
                <div>
                    <input type="text" name="search" id="reach" />
                    <button><i className='bx bxs-search-alt-2'></i></button>
                </div>
            </div>
            <div>
                <ul>
                    <li>Home</li>
                </ul>
            </div>
            <div className={st.filtros}>
                <details className={st.collapse}>
                    <summary className={st.title}>Orden Alfabetico</summary>
                    <hr className={st.divider} />
                    <ul>
                        <li>A - Z</li>
                        <li>Z - A</li>
                    </ul>
                </details>
                <details className={st.collapse}>
                    <summary className={st.title}>Tipo de Dieta</summary>
                    <hr className={st.divider} />
                    <ul>
                        <li>Vegetariana</li>
                    </ul>
                </details>
                <details className={st.collapse}>
                    <summary className={st.title}>Puntos</summary>
                    <hr className={st.divider} />
                    <ul>
                        <li>Lowest to highest score</li>
                        <li>Highest to lowest score</li>
                    </ul>
                </details>
            </div>
        </aside>
    )
};

export default SideBar;
