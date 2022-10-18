import { getRandomIntInclusive } from '../index.js';

const gameName = 'brain-prime';
const taskGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkQuestionAnswer = () => {
  const number1 = getRandomIntInclusive(1, 20);

  const isPrime = () => {
    if (number1 < 2) {
      return false;
    }

    let divider = 2;

    while (divider <= number1 / 2) {
      if (number1 % divider === 0) {
        return false;
      }

      divider += 1;
    }
    return true;
  };

  let result;

  if (isPrime() === false) {
    result = 'no';
  } else {
    result = 'yes';
  }
  const correctAnswer = result;
  const question = number1;
  return [`${question}`, `${correctAnswer}`];
};
export { gameName, taskGame, checkQuestionAnswer };
