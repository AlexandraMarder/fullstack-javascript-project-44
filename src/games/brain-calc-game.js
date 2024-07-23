import { playGame } from "../index.js";

const getTitle = () => {
  console.log('What is the result of the expression?');
}

const gameFunction = () => {
  const random1 = Math.floor(Math.random() * 10) + 1;
  const random2 = Math.floor(Math.random() * 10) + 1;
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  const randomOperator = operators[randomIndex];
  let correctAnswer;

  if (randomOperator === '+') {
    correctAnswer = random1 + random2;
  } else if (randomOperator === '-') {
    correctAnswer = random1 - random2;
  } else if (randomOperator === '*') {
    correctAnswer = random1 * random2;
  }

  const random = `${random1} ${randomOperator} ${random2}`;
  console.log(`Question: ${random}`);
  return correctAnswer.toString();
};


const playBrainCalc = () => {
  playGame(gameFunction, getTitle);
};

export default playBrainCalc;