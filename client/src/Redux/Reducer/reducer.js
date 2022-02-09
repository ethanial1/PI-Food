import { GET_ALL_RECIPES, GET_RECIPES_BY_NAME, ORDER_BY_NAME } from '../Actions/actions';

const initialState = {
    allRecipes: [],
    ordenando: false
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
        case ORDER_BY_NAME:
            if (actions.payload === "ASC") state.allRecipes.sort((a,b) => a.name.localeCompare(b.name))
            else if (actions.payload === 'DESC') state.allRecipes.sort((a,b) => b.name.localeCompare(a.name))
            return {
                ...state
            }
        default:
            return state;
    }
}


export default rootReducer;