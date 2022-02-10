import React from 'react';
import st from './FormCreate.module.css'
import img from '../../assets/formImg.jpg'

const FormCreate = () => {
  return (
    <section className={st.section}>
      <div className={st.img}>
        <img src={img} alt="" />
      </div>
      <div className={st.form}>
        <form>
          <div className={st.group}>
            <label htmlFor="nombre">Nombre <span>*</span></label>
            <input type="text" name="nombre" id="nombre" placeholder='Mi receta favorita'/>
          </div>
          <div className={st.group}>
            <label htmlFor="resumen">Resumen del plato <span>*</span></label>
            <textarea name="resumen" id="resumen" cols="30" rows="4" placeholder=''></textarea>
          </div>
          <div className={st.group}>
            <label htmlFor="puntuacion">Puntuación</label>
            <input type="number" name="puntuacion" id="puntuacion" />
          </div>
          <div className={st.group}>
            <label htmlFor="saludable">Nivel de comida saludable <span>*</span></label>
            <input type="range" name="saludable" id="saludable" />
          </div>
          <div className={st.group}>
            <label htmlFor="pasos">Pasos</label>
            <textarea name="pasos" id="pasos" cols="30" rows="5"></textarea>
          </div>
          <div className={st.group}>
            <label htmlFor="dietas">Dietas <span>*</span></label>
          </div>
          <button type="submit">Guardar</button>
        </form>
      </div>
    </section>
  ) 
};

export default FormCreate;