import startGame from '../index.js';
import getRandomIntInclusive from '../getRandomIntInclusive.js';

const taskGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const checkQuestionAnswer = () => {
  const question = getRandomIntInclusive(1, 50);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [`${question}`, `${correctAnswer}`];
};
export default () => startGame(taskGame, checkQuestionAnswer);
