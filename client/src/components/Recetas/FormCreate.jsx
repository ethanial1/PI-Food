import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import st from './FormCreate.module.css'
import img from '../../assets/formImg.png'
import { saveNewRecipe } from '../../Redux/Actions/actions';
import Nav from '../NavBar/Nav';
import Types from './Types';

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
    } else if(form.score > 100 || form.score < 0) {
        err.score = 'Debe de ser un número mayor a 0 y menor a 100'
    }

    if(!form.healthScore) {
        err.healthScore = 'Puntuación requerida'
    } else if(form.healthScore > 100 || form.healthScore < 0) {
        err.healthScore = 'Debe de ser un número mayor a 0 y menor a 100'
    }

    if(!form.instructions) err.instructions = '¿Podrías compartirnos los pasos de la receta?'

    if(!form.diets.length) err.diets = 'Debes de seleccionar al menos 1 tipo de dieta'

    return err;
}

const FormCreate = () => {
    const [form, setForm] = useState(initialForm)
    const [error, setError] = useState({})
    
    const recipeCreated = useSelector(state => state.recipeCreated)
    const dispatch = useDispatch()

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

    const handleRemoveType = id => {
        setForm({
            ...form, 
            diets: form.diets.filter(diet => diet.id !== id)
        })
    }

    const handleAddType = obj => {
        const index = form.diets.map( diet => diet.id ).indexOf(obj.id);
        if(index < 0) {
            setForm({
                ...form,
                diets: [...form.diets, obj]
            })
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
        <>
        <Nav />
        <div className={st.container}>
            <section className={st.section}>
            <h3>Crear una nueva receta</h3>
            <div className={st.form}>
                <h3>Nueva receta</h3>
                <form className={st.form_items} onSubmit={handleSubmit}>
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
                    <div className={st.types_group}>
                    <Types handleRemoveType={handleRemoveType} handleAddType={handleAddType} diets={form.diets}/>
                    </div>
                    { error.diets && <span>{error.diets}</span> }
                </div>
                <button type="submit" className={st.btn}>Guardar</button>
                </form>
            </div>
            </section>
            <div className={st.img}>
            <img src={img} alt="" />
        </div>
        {
            Object.keys(recipeCreated).length > 0 && (
            <div className={st.msg}>
                <h5>Receta creada</h5>
                <div>
                <span>{recipeCreated.name}</span>
                </div>
            </div>
            )
        }
        </div>
        </>
    ) 
};

export default FormCreate;