import startGame from '../index.js';
import getRandomIntInclusive from '../getRandomIntInclusive.js';

const taskGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  let result;

  if (number % 2 === 0) {
    result = 'yes';
  } else {
    result = 'no';
  }
  return result;
};

const checkQuestionAnswer = () => {
  const number = getRandomIntInclusive(1, 50);

  const correctAnswer = isEven(number);
  const question = number;
  return [`${question}`, `${correctAnswer}`];
};
export default () => startGame(taskGame, checkQuestionAnswer);
