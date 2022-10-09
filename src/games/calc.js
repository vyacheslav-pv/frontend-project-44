import { getRandomIntInclusive } from '../index.js';

const gameName = 'brain-calc';
const taskGame = 'What is the result of the expression?';

const generatorQuestion = () => {
  const number1 = getRandomIntInclusive(1, 100);
  const number2 = getRandomIntInclusive(1, 100);

  const operators = ['+', '-', '*'];
  const randomOperator = operators[getRandomIntInclusive(0, 2)];

  const question = `${number1} ${randomOperator} ${number2}`;

  let result;
  switch (randomOperator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      result = null;
  }
  const correctAnswer = result;
  return [`${question}`, `${correctAnswer}`];
};
export { gameName, taskGame, generatorQuestion };
