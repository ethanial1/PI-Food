export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const GET_RECIPES_BY_NAME = "GET_RECIPES_BY_NAME";
export const GET_DETAILS_RECIPE = "GET_DETAILS_RECIPE";
export const GET_TYPES_RECIPE = "GET_TYPES_RECIPE";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const FILTER_RECIPES = "FILTER_RECIPES"
export const SORT_RECIPES = "SORT_RECIPES";
export const RESET_RECIPE = "RESET_RECIPE"

export const getAllRecipes = () => dispatch => {
    return (
        fetch("https://back-end-food.herokuapp.com/recipes")
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
        fetch(`https://back-end-food.herokuapp.com/recipes?name=${name}`)
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
        fetch(`https://back-end-food.herokuapp.com/recipes/${idu}-${type}`)
        .then(res => res.json())
        .then(json => dispatch({
            type: GET_DETAILS_RECIPE,
            payload: json
        }))
    )
}

export const getTypesRecipe = () => dispatch => {
    return (
        fetch('https://back-end-food.herokuapp.com/types')
        .then(res => res.json())
        .then(json => dispatch({
            type: GET_TYPES_RECIPE,
            payload: json
        }))
    )
}

export const saveNewRecipe = form => dispatch => {
    form = {
        ...form,
        diets: form.diets.map(diet => diet.id)
    }
    return (
        fetch('https://back-end-food.herokuapp.com/recipe', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        .then(res => res.json())
        .then(json => dispatch({
            type: CREATE_RECIPE,
            payload: json
        }))
        .catch(error => console.log(error))
    )
}


export const sortRecipesBy = orden => {
    return {
        type: SORT_RECIPES,
        payload: orden
    }
}

export const filterBy = type => {
    return {
        type: FILTER_RECIPES,
        payload: type
    }
}

export const resetRecipeDetail = () => {
    return {
        type: RESET_RECIPE
    }
}