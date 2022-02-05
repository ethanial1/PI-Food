export const GET_ALL_RECIPES = "GET_ALL_RECIPES";


export const getAllRecipes = () => dispatch => {
    return (
        fetch("")
        .then(res => res.json())
        .then(json => dispatch({
            type: GET_ALL_RECIPES,
            payload: json
        }))
    )
}