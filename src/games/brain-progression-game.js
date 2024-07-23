import playGame from '../index.js';

const getTitle = () => {
  console.log('What number is missing in the progression?');
};

const gameFunction = () => {
  const progressionLength = Math.floor(Math.random() * 6) + 5;
  const start = Math.floor(Math.random() * 100) + 1;
  const step = Math.floor(Math.random() * 10) + 1;

  const array = [start];
  for (let i = 0; i < progressionLength; i + 1) {
    array.push(array[i] + step);
  }

  const randomIndex = Math.floor(Math.random() * array.length);
  const correctAnswer = array[randomIndex];

  array[randomIndex] = '..';
  const random = array.join(' ');
  console.log(`Question: ${random}`);
  return correctAnswer.toString();
};

const playBrainProgression = () => {
  playGame(gameFunction, getTitle);
};

export default playBrainProgression;
