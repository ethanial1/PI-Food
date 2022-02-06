import { GET_ALL_RECIPES, GET_RECIPES_BY_NAME } from '../Actions/actions';

const initialState = {
    allRecipes: [],
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
        default:
            return state;
    }
}


export default rootReducer;