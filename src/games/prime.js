import startGame from '../index.js';
import getRandomIntInclusive from '../getRandomIntInclusive.js';

const taskGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  let divider = 2;

  while (divider <= num / 2) {
    if (num % divider === 0) {
      return false;
    }
    divider += 1;
  }
  return true;
};

const checkQuestionAnswer = () => {
  const number = getRandomIntInclusive(1, 60);
  const question = number;
  const correctAnswer = (isPrime(number) ? 'yes' : 'no');

  return [`${question}`, `${correctAnswer}`];
};
export default () => startGame(taskGame, checkQuestionAnswer);
