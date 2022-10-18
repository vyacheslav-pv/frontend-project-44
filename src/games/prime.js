import { getRandomIntInclusive } from '../index.js';

const gameName = 'brain-prime';
const taskGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkQuestionAnswer = () => {
  const number = getRandomIntInclusive(1, 20);

  const isPrime = () => {
    if (number < 2) {
      const result = 'no';
      return result;
    }

    let divider = 2;

    while (divider <= number / 2) {
      if (number % divider === 0) {
        const result = 'no';
        return result;
      }
      divider += 1;
    }
    const result = 'yes';
    return result;
  };

  const correctAnswer = isPrime();
  const question = number;
  return [`${question}`, `${correctAnswer}`];
};
export { gameName, taskGame, checkQuestionAnswer };
