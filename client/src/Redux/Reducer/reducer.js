import { CREATE_RECIPE, FILTER_RECIPES, GET_ALL_RECIPES, GET_DETAILS_RECIPE, GET_RECIPES_BY_NAME, GET_TYPES_RECIPE, RESET_RECIPE, SORT_RECIPES } from '../Actions/actions';

const initialState = {
    allRecipes: [],
    recipesFiltered: [],
    recipeDetails: {},
    types: [],
    recipeCreated: {}
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
        case CREATE_RECIPE:
            return {
                ...state,
                recipeCreated: actions.payload
            }
        case SORT_RECIPES:
            const ref = state.recipesFiltered.length > 0 ? state.recipesFiltered : state.allRecipes;
            if (actions.payload === "alp-ASC") ref.sort((a,b) => a.name.localeCompare(b.name))
            else if (actions.payload === 'alp-DESC') ref.sort((a,b) => b.name.localeCompare(a.name))
            else if(actions.payload === "points-ASC") ref.sort((a,b) => {
                if(a.score > b.score) return 1
                if(b.score > a.score) return -1
                return 0
            })
            else if (actions.payload === "points-DESC") ref.sort((a,b) => {
                if(a.score > b.score) return -1
                if(b.score > a.score) return 1
                return 0
            })
            return {
                ...state
            }
        case FILTER_RECIPES:
            return {
                ...state,
                recipesFiltered: state.allRecipes.filter(recipe => recipe.diets.includes(actions.payload))
            }
        case RESET_RECIPE:
            return {
                ...state,
                recipeDetails: {}
            }
        default:
            return state;
    }
}


export default rootReducer;