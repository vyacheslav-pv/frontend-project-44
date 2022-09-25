import readlineSync from 'readline-sync';

const getRandomIntInclusive = (min, max) => {
  const min2 = Math.ceil(min);
  const max2 = Math.floor(max);
  return Math.floor(Math.random() * (max2 - min2 + 1)) + min2;
};

const evenGame = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    const number = getRandomIntInclusive(1, 50);
    console.log('Question: ', number);
    const answerUser = readlineSync.question('Your answer: ');
    const isEven1 = (number % 2 === 0) && (answerUser === 'yes');
    const isEven2 = (number % 2 !== 0) && (answerUser === 'no');
    const evenNumber = number % 2 === 0;

    if (isEven1 === true || isEven2 === true) {
      console.log('Correct!');
    } else {
      const correctAnswer = (evenNumber === true ? 'yes' : 'no');
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default evenGame;
