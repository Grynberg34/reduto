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

const getFilmReducer = (filme = null, action) => {
    if (action.type === 'GET_FILM') {

        return action.payload;
        
    }

    return filme;
};

const getImgLinkReducer = (link = null, action) => {
    if (action.type === 'GET_IMG_LINK') {
  
      return action.payload;
      
    }
    
    return link;
  };

export default combineReducers({

    numbers: getNumbersReducer,
    open: openCloseMenuReducer,
    filmes: getFilmsReducer,
    filme: getFilmReducer,
    link: getImgLinkReducer

});
