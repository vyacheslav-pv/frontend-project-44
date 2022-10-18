import { getRandomIntInclusive } from '../index.js';

const gameName = 'brain-even';
const taskGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const checkQuestionAnswer = () => {
  const number = getRandomIntInclusive(1, 50);

  const isEven = number % 2 === 0;

  let result;

  if (isEven === false) {
    result = 'no';
  } else {
    result = 'yes';
  }

  const correctAnswer = result;
  const question = number;
  return [`${question}`, `${correctAnswer}`];
};
export { gameName, taskGame, checkQuestionAnswer };
