import startGame from '../index.js';
import getRandomIntInclusive from '../getRandomIntInclusive.js';

const taskGame = 'Find the greatest common divisor of given numbers.';

const findGCD = (number1, number2) => {
  let num1 = number1;
  let num2 = number2;
  while (num1 && num2) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }
  return num1 + num2;
};

const checkQuestionAnswer = () => {
  const number1 = getRandomIntInclusive(1, 100);
  const number2 = getRandomIntInclusive(1, 100);

  const question = `${number1} ${number2}`;

  const correctAnswer = findGCD(number1, number2);
  return [`${question}`, `${correctAnswer}`];
};
export default () => startGame(taskGame, checkQuestionAnswer);
