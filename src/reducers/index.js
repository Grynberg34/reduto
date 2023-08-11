import { combineReducers } from 'redux';

const getNumbersReducer = (numbers = null, action) => {
    if (action.type === 'GET_NUMBERS') {

        return action.payload;
        
    }

    return numbers;
};

const openCloseMenuReducer = (open = false, action) => {
    if (action.type === 'OPEN_CLOSE_MENU') {

        return action.payload;
        
    }

return open;
};

const getFilmsReducer = (filmes = null, action) => {
    if (action.type === 'GET_FILMS') {

        return action.payload;
        
    }

    return filmes;
};

export default combineReducers({

    numbers: getNumbersReducer,
    open: openCloseMenuReducer,
    filmes: getFilmsReducer

});
