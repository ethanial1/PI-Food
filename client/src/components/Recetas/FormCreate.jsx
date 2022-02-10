import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import st from './FormCreate.module.css'
import img from '../../assets/formImg.jpg'
import { saveNewRecipe } from '../../Redux/Actions/actions';

const initialForm = {
  img: "",
  name: "",
  summary: "",
  score: "",
  healthScore: "",
  instructions: "",
  diets: [],
}

const validate = form => {
  const err = {}

  if(!form.img.trim()) err.img = 'url no valida, por favor ingresar una URL'

  if(!form.name.trim()) {
    err.name = 'Nombre requerido'
  }

  if(!form.summary.trim()) {
    err.summary = 'Descripción requerida' 
  }

  if(!form.score) {
    err.score = 'La puntuación es requerida'
  }

  if(!form.healthScore) err.healthScore = 'Puntuación requerida'

  if(!form.instructions) err.instructions = '¿Podrías compartirnos los pasos de la receta?'

  if(!form.diets.length) err.diets = 'Debes de seleccionar al menor 1 tipo de dieta'

  return err;
}

// TODO cambia el estilo de la vista del formualrio
const FormCreate = () => {
  const [form, setForm] = useState(initialForm)
  const [error, setError] = useState({})

  const dispatch = useDispatch()
  const types = useSelector(state => state.types)

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleBrurValidate = e => {
    setError(validate({
      ...form,
      [e.target.name]: e.target.value
    }))
  }

  const handleChecked = e => {
    if(e.target.checked) {
      form.diets.push(e.target.name)
    } else {
      const indice = form.diets.indexOf(e.target.name);
      form.diets.splice(indice, 1);
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    const aux = validate(form)
    setError(aux)

    if(Object.keys(aux).length === 0) {
      dispatch(saveNewRecipe(form))
      setForm(initialForm)
    }
  }

  return (
    <section className={st.section}>
      <div className={st.img}>
        <img src={img} alt="" />
      </div>
      <div className={st.form}>
        <form onSubmit={handleSubmit}>
          <div className={st.group}>
            <label htmlFor="img">Image</label>
            <input type="text" name="img" id="img" placeholder='URL de la imagen del platillo' value={form.img} onChange={handleChange} onBlur={handleBrurValidate}/>
            { error.img && <span>{error.img}</span> }
          </div>
          <div className={st.group}>
            <label htmlFor="name">Nombre <span>*</span></label>
            <input type="text" name="name" id="name" placeholder='Mi receta favorita' value={form.name} onChange={handleChange} onBlur={handleBrurValidate}/>
            { error.name && <span>{error.name}</span> }
          </div>
          <div className={st.group}>
            <label htmlFor="summary">Resumen del plato <span>*</span></label>
            <textarea name="summary" id="summary" cols="30" rows="4" placeholder='Describe lo asombrosa que es tu receta' value={form.summary} onChange={handleChange} onBlur={handleBrurValidate}></textarea>
            { error.summary && <span>{error.summary}</span> }
          </div>
          <div className={st.group}>
            <label htmlFor="score">Puntuación</label>
            <input type="number" name="score" id="score" placeholder='¿Qué puntuación le das a tu receta?' value={form.score} onChange={handleChange} onBlur={handleBrurValidate}/>
            { error.score && <span>{error.score}</span> }
          </div>
          <div className={st.group}>
            <label htmlFor="healthScore">Nivel de comida saludable <span>*</span></label>
            <input type="number" name="healthScore" id="healthScore" placeholder='¿Qué tan saludable es?' value={form.healthScore} onChange={handleChange} onBlur={handleBrurValidate}/>
            { error.healthScore && <span>{error.healthScore}</span> }
          </div>
          <div className={st.group}>
            <label htmlFor="instructions">Pasos</label>
            <textarea name="instructions" id="instructions" cols="30" rows="5" placeholder='Cuéntanos cómo se prepara, todos queremos saber' value={form.instructions} onChange={handleChange} onBlur={handleBrurValidate}></textarea>
            { error.instructions && <span>{error.instructions}</span> }
          </div>
          <div className={st.group}>
            <label htmlFor="dietas">Dietas <span>*</span></label>
            <div className={st.check}>
              {
                types.map(type => (
                  <label key={type.id} htmlFor="receta1">
                    <input type="checkbox" name={type.id} onChange={handleChecked}/>
                    {type.nombre}
                  </label>
                ))
              }
            </div>
            { error.diets && <span>{error.diets}</span> }
          </div>
          <button type="submit">Guardar</button>
        </form>
      </div>
    </section>
  ) 
};

export default FormCreate;