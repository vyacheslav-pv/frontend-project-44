import startGame from '../index.js';
import getRandomIntInclusive from '../getRandomIntInclusive.js';

const taskGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const checkQuestionAnswer = () => {
  const number = getRandomIntInclusive(1, 50);

  let result;

  if (number % 2 === 0) {
    result = 'yes';
  } else {
    result = 'no';
  }

  const correctAnswer = result;
  const question = number;
  return [`${question}`, `${correctAnswer}`];
};
export default () => startGame(taskGame, checkQuestionAnswer);
