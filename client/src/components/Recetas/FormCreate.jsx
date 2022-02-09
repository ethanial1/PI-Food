import React from 'react';

const FormCreate = () => {
  return (
    <section>
      <div>
        <form>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" name="nombre" id="nombre" />
          </div>
          <div>
            <label htmlFor="resumen">Resumen del plato</label>
            <textarea name="resumen" id="resumen" cols="30" rows="10"></textarea>
          </div>
          <div>
            <label htmlFor="puntuacion">Puntuación</label>
            <input type="number" name="puntuacion" id="puntuacion" />
          </div>
          <div>
            <label htmlFor="saludable">Nivel de comida saludable</label>
            <input type="range" name="saludable" id="saludable" />
          </div>
          <div>
            <label htmlFor="pasos">Pasos</label>
            <textarea name="pasos" id="pasos" cols="30" rows="10"></textarea>
          </div>
          <div>
            <label htmlFor="dietas">Dietas</label>
          </div>
          <button type="submit">Guardar</button>
        </form>
      </div>
    </section>
  ) 
};

export default FormCreate;
