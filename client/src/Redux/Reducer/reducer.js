import { GET_ALL_RECIPES } from '../Actions/actions';

const initialState = {
    allRecipes: []
}

const rootReducer = (state = initialState, actions ) => {
    switch(actions.type) {
        case GET_ALL_RECIPES: 
            return {
                ...state,
                allRecipes: actions.payload
            }
        default:
            return state;
    }
}


export default rootReducer;