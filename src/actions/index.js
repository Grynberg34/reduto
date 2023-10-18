import filmes from "../filmes";

export const GetNumbers = () => async dispatch => {

  function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const numbers = [];
  while (numbers.length < 4) {
    const randomNumber = getRandomNumber(1, 10);
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }

  dispatch({ type: 'GET_NUMBERS', payload: numbers});

};

export const OpenCloseMenu = (open) => async dispatch => {

  dispatch({ type: 'OPEN_CLOSE_MENU', payload: open});

};

export const GetFilms = () => async dispatch => {

  dispatch({ type: 'GET_FILMS', payload: filmes});

};

export const GetFilm = (uri) => async dispatch => {

  var filme = filmes.find(x => x.uri === uri);

  dispatch({ type: 'GET_FILM', payload: filme});

};

export const GetImgLink = (link) => async dispatch => {

  dispatch({ type: 'GET_IMG_LINK', payload: link });

};