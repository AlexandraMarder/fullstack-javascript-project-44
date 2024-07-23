import playGame from '../index.js';

const getTitle = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

const findDivider = (a, b) => {
  let num1 = a;
  let num2 = b;
  
  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  
  return num1;
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