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