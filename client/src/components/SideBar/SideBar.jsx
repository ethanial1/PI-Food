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
            <div className={st.filtros}>
                <details className="collapse">
                    <summary className="title">Orden Alfabetico</summary>
                    <hr className="divider" />
                    <ul>
                        <li>A - Z</li>
                        <li>Z - A</li>
                    </ul>
                </details>
                <details className="collapse">
                    <summary className="title">Tipo de Dieta</summary>
                    <hr className="divider" />
                    <ul>
                        <li>Vegetariana</li>
                    </ul>
                </details>
                <details className="collapse">
                    <summary className="title">Puntos</summary>
                    <hr className="divider" />
                    <ul>
                        <li></li>
                    </ul>
                </details>
            </div>
        </aside>
    )
};

export default SideBar;
