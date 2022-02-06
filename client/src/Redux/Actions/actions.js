export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const GET_ALL_TYPES = "GET_ALL_TYPES";
export const GET_RECIPES_BY_NAME = "GET_RECIPES_BY_NAME";

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

export const getAllTypesOfRecipes = () => dispatch => {
    return (
        fetch("http://localhost:3001/types")
        .then(res => res.json())
        .then(json => dispatch({
            type: GET_ALL_TYPES,
            payload: json
        }))
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
