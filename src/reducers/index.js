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

const getImgIndexReducer = (index = null, action) => {
    if (action.type === 'GET_IMG_INDEX') {
  
      return action.payload;
      
    }
    
    return index;
};

const getProdutoraReducer = (produtora= null, action) => {
    if (action.type === 'GET_PRODUTORA') {

        return action.payload;
        
    }

    return produtora;
};

const getProjetosReducer = (projetos= null, action) => {
    if (action.type === 'GET_PROJETOS') {

        return action.payload;
        
    }

    return projetos;
};

const getProjetoIdReducer = (projeto= 0, action) => {
    if (action.type === 'GET_PROJETO_ID') {

        return action.payload;
        
    }

    return projeto;
};

export default combineReducers({

    numbers: getNumbersReducer,
    open: openCloseMenuReducer,
    filmes: getFilmsReducer,
    filme: getFilmReducer,
    link: getImgLinkReducer,
    index: getImgIndexReducer,
    produtora: getProdutoraReducer,
    projetos: getProjetosReducer,
    projeto: getProjetoIdReducer,

});
