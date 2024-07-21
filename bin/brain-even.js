#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getUserName from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const playBrainEven = () => {
  const userName = getUserName();
  let count = 3;
  let game = true;
  let wins = 0;

  do {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    const random = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = random % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${random}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      wins += 1;
      count -= 1;
    } else {
      game = false;
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${userName}!`);
    }
  } while (game && count > 0);

  if (wins === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

playBrainEven();
