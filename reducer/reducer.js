import { combineReducers } from 'redux'

const initialState ={
    CHECKED: false,
    NAME: false

}

function DataFetching  (state = initialState, action) {

    switch(action.type){

        case 'SET_NAME':
            return {
                ...state,
                NAME: action.data
            };

        case 'AGE_CONFIRMED':
            return {
                ...state,
                CHECKED: action.data
            };

        default:
            return state;
    };
}

const appReducers = combineReducers({
    DataFetching
})

export default appReducers