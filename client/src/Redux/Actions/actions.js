export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const GET_RECIPES_BY_NAME = "GET_RECIPES_BY_NAME";
export const GET_DETAILS_RECIPE = "GET_DETAILS_RECIPE";
export const GET_TYPES_RECIPE = "GET_TYPES_RECIPE";
export const SORT_RECIPES = "SORT_RECIPES";

export const getAllRecipes = () => dispatch => {
    return (
        fetch("http://localhost:3001/recipes")
        .then(res => res.json())
        .then(json => dispatch({
            type: GET_ALL_RECIPES,
            payload: json
        }))
        .catch(error => {
            console.log(error)
        })
    )
}

export const getRecipesByName = name => dispatch => {
    return (
        fetch(`http://localhost:3001/recipes?name=${name}`)
        .then(res => res.json())
        .then(json => dispatch({
            type: GET_RECIPES_BY_NAME,
            payload: json
        }))
    )
}


export const getDetailsRecipe = id => dispatch => {
    let [ idu, type ] = id.split('-')
    if(!type) type = 'DB'
    return (
        fetch(`http://localhost:3001/recipes/${idu}-${type}`)
        .then(res => res.json())
        .then(json => dispatch({
            type: GET_DETAILS_RECIPE,
            payload: json
        }))
    )
}

export const getTypesRecipe = () => dispatch => {
    return (
        fetch('http://localhost:3001/types')
        .then(res => res.json())
        .then(json => dispatch({
            type: GET_TYPES_RECIPE,
            payload: json
        }))
    )
}

export const saveNewRecipe = form => dispatch => {
    return (
        fetch('http://localhost:3001/recipe', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(error => console.log(error))
    )
}


export const sortRecipesBy = orden => {
    return {
        type: SORT_RECIPES,
        payload: orden
    }
}