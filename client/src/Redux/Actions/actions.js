export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const GET_RECIPES_BY_NAME = "GET_RECIPES_BY_NAME";
export const ORDER_BY_NAME = "ORDER_BY_NAME_";

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


export const orderByName = orden => {
    return {
        type: ORDER_BY_NAME,
        payload: orden
    }
}

// TODO crear una función para hacer la petición de los detalles de una receta y creación de una recta