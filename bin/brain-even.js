#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const isEven = (randomValue) => {
  let correctAnswer;
  if (randomValue % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return correctAnswer;
};

const getEven = () => {
  const name = getName();
  let tries = 3;
  let wins = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (tries > 0) {
    const randomValue = Math.floor(Math.random() * 101);
    console.log(`Question: ${randomValue}`);
    const userGuess = readlineSync.question('Your answer: ');
    const correct = isEven(randomValue);
    if (userGuess === correct) {
      console.log('Correct!');
      wins += 1;
    } else {
      console.log(`'${userGuess}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${name}!`);
    }
    tries -= 1;
  }
  if (tries === 0 && wins === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

getEven();
