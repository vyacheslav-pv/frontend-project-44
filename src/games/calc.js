import startGame from '../index.js';
import getRandomIntInclusive from '../getRandomIntInclusive.js';

const taskGame = 'What is the result of the expression?';

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default: throw new Error('unknown expression');
  }
};

const checkQuestionAnswer = () => {
  const number1 = getRandomIntInclusive(1, 100);
  const number2 = getRandomIntInclusive(1, 100);

  const operators = ['+', '-', '*'];
  const operator = operators[getRandomIntInclusive(0, operators.length - 1)];

  const question = `${number1} ${operator} ${number2}`;

  const correctAnswer = calculate(number1, number2, operator);
  return [`${question}`, `${correctAnswer}`];
};
export default () => startGame(taskGame, checkQuestionAnswer);
