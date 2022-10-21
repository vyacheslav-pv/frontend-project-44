import startGame from '../index.js';
import getRandomIntInclusive from '../getRandomIntInclusive.js';

const taskGame = 'What number is missing in the progression?';

const getProgression = (start, step, length, member) => {
  let result = '';
  for (let i = start; i <= length; i += step) {
    if (i === member) {
      result = `${result} ..`;
    } else {
      result = `${result} ${i}`;
    }
  }
  return result.slice(1);
};

const checkQuestionAnswer = () => {
  const number1 = getRandomIntInclusive(1, 16);
  const number2 = getRandomIntInclusive(1, 10);

  const progressionMember1 = number1 + (10 - 1) * 3;
  const progressionMember2 = number1 + (number2 - 1) * 3;

  const correctAnswer = progressionMember2;
  const question = getProgression(number1, 3, progressionMember1, progressionMember2);
  return [`${question}`, `${correctAnswer}`];
};
export default () => startGame(taskGame, checkQuestionAnswer);
