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