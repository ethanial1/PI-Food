import React, {useState} from 'react';
import { useDispatch } from 'react-redux'
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
  diets: [1],
}

const FormCreate = () => {
  const [form, setForm] = useState(initialForm)
  const [errores, setErrores] = useState({})

  const dispatch = useDispatch()

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    if(Object.keys(errores).length === 0) {
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
            <input type="text" name="img" id="img" placeholder='URL de la imagen del platillo' value={form.img} onChange={handleChange}/>
          </div>
          <div className={st.group}>
            <label htmlFor="name">Nombre <span>*</span></label>
            <input type="text" name="name" id="name" placeholder='Mi receta favorita' value={form.name} onChange={handleChange}/>
          </div>
          <div className={st.group}>
            <label htmlFor="summary">Resumen del plato <span>*</span></label>
            <textarea name="summary" id="summary" cols="30" rows="4" placeholder='Describe lo asombrosa que es tu receta' value={form.summary} onChange={handleChange}></textarea>
          </div>
          <div className={st.group}>
            <label htmlFor="score">Puntuación</label>
            <input type="number" name="score" id="score" placeholder='¿Qué puntuación le das a tu receta?' value={form.score} onChange={handleChange}/>
          </div>
          <div className={st.group}>
            <label htmlFor="healthScore">Nivel de comida saludable <span>*</span></label>
            <input type="number" name="healthScore" id="healthScore" placeholder='¿Qué tan saludable es?' value={form.healthScore} onChange={handleChange}/>
          </div>
          <div className={st.group}>
            <label htmlFor="instructions">Pasos</label>
            <textarea name="instructions" id="instructions" cols="30" rows="5" placeholder='Cuéntanos cómo se prepara, todos queremos saber' value={form.instructions} onChange={handleChange}></textarea>
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