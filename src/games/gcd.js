import { getRandomIntInclusive } from '../index.js';

const gameName = 'brain-gcd';
const taskGame = 'Find the greatest common divisor of given numbers.';

const checkQuestionAnswer = () => {
  let number1 = getRandomIntInclusive(1, 100);
  let number2 = getRandomIntInclusive(1, 100);

  const question = `${number1} ${number2}`;

  while (number1 && number2) {
    if (number1 > number2) {
      number1 %= number2;
    } else {
      number2 %= number1;
    }
  }
  const correctAnswer = number1 + number2;
  return [`${question}`, `${correctAnswer}`];
};
export { gameName, taskGame, checkQuestionAnswer };
