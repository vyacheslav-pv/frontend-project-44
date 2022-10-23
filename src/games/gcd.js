import startGame from '../index.js';
import getRandomIntInclusive from '../getRandomIntInclusive.js';

const taskGame = 'Find the greatest common divisor of given numbers.';

const findGCD = (num1, num2) => (num2 === 0 ? num1 : findGCD(num2, num1 % num2));

const checkQuestionAnswer = () => {
  const number1 = getRandomIntInclusive(1, 100);
  const number2 = getRandomIntInclusive(1, 100);

  const question = `${number1} ${number2}`;

  const correctAnswer = findGCD(number1, number2);
  return [`${question}`, `${correctAnswer}`];
};
export default () => startGame(taskGame, checkQuestionAnswer);
