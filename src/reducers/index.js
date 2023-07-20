import { combineReducers } from 'redux';

const getNumbersReducer = (numbers = null, action) => {
    if (action.type === 'GET_NUMBERS') {

        return action.payload;
        
    }

    return numbers;
};

export default combineReducers({

    numbers: getNumbersReducer

});
