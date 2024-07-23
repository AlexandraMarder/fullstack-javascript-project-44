import playGame from '../index.js';

const getTitle = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

const findDivider = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const gameFunction = () => {
  const random1 = Math.floor(Math.random() * 100) + 1;
  const random2 = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = findDivider(random1, random2);
  const random = `${random1} ${random2}`;
  console.log(`Question: ${random}`);
  return correctAnswer.toString();
};

const playBrainGcd = () => {
  playGame(gameFunction, getTitle);
};

export default playBrainGcd;
