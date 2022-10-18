import { getRandomIntInclusive } from '../index.js';

const gameName = 'brain-progression';
const taskGame = 'What number is missing in the progression?';

const checkQuestionAnswer = () => {
  const number1 = getRandomIntInclusive(1, 16);
  const number2 = getRandomIntInclusive(1, 10);

  const progressionMember1 = number1 + (10 - 1) * 3;
  const progressionMember2 = number1 + (number2 - 1) * 3;

  let result = '';
  for (let i = number1; i <= progressionMember1; i += 3) {
    if (i === progressionMember2) {
      result = `${result} ..`;
    } else {
      result = `${result} ${i}`;
    }
  }
  const correctAnswer = progressionMember2;
  const question = result.slice(1);
  return [`${question}`, `${correctAnswer}`];
};
export { gameName, taskGame, checkQuestionAnswer };
