import { GET_ALL_RECIPES, GET_DETAILS_RECIPE, GET_RECIPES_BY_NAME, GET_TYPES_RECIPE, ORDER_BY_NAME, ORDER_BY_POINTS, SORT_RECIPES } from '../Actions/actions';

const initialState = {
    allRecipes: [],
    recipeDetails: {},
    types: []
}

const rootReducer = (state = initialState, actions ) => {
    switch(actions.type) {
        case GET_ALL_RECIPES: 
            return {
                ...state,
                allRecipes: actions.payload
            }
        case GET_RECIPES_BY_NAME:
            return {
                ...state,
                allRecipes: actions.payload
            }
        case GET_DETAILS_RECIPE:
            return {
                ...state,
                recipeDetails: actions.payload
            }
        case GET_TYPES_RECIPE:
            return {
                ...state,
                types: actions.payload
            }
        case SORT_RECIPES:
            if (actions.payload === "alp-ASC") state.allRecipes.sort((a,b) => a.name.localeCompare(b.name))
            else if (actions.payload === 'alp-DESC') state.allRecipes.sort((a,b) => b.name.localeCompare(a.name))
            else if(actions.payload === "points-ASC") state.allRecipes.sort((a,b) => {
                if(a.score > b.score) return 1
                if(b.score > a.score) return -1
                return 0
            })
            else if (actions.payload === "points-DESC") state.allRecipes.sort((a,b) => {
                if(a.score > b.score) return -1
                if(b.score > a.score) return 1
                return 0
            })
            else {
                console.log(state.allRecipes[0].diets,state.allRecipes[0].diets.includes(actions.payload))
                state.allRecipes = state.allRecipes.filter(recipe => recipe.diets.includes(actions.payload))
            }
            return {
                ...state
            }
        default:
            return state;
    }
}


export default rootReducer;