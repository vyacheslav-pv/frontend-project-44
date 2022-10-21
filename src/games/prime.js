import startGame from '../index.js';
import getRandomIntInclusive from '../getRandomIntInclusive.js';

const taskGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    const result = 'no';
    return result;
  }

  let divider = 2;

  while (divider <= num / 2) {
    if (num % divider === 0) {
      return 'no';
    }
    divider += 1;
  }
  return 'yes';
};

const checkQuestionAnswer = () => {
  const number = getRandomIntInclusive(1, 50);

  const correctAnswer = isPrime(number);
  const question = number;
  return [`${question}`, `${correctAnswer}`];
};
export default () => startGame(taskGame, checkQuestionAnswer);
