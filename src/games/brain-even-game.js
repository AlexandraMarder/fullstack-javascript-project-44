import { playGame } from "../index.js";

const getTitle = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
}

const gameFunction = () => {
  const random = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = random % 2 === 0 ? 'yes' : 'no';
  console.log(`Question: ${random}`);
  return correctAnswer;
};


const playBrainEven = () => {
  playGame(gameFunction, getTitle);
};

export default playBrainEven;