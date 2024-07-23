import readlineSync from 'readline-sync';

const playGame = (gameFunction, getTitle) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  let count = 3;
  let game = true;
  let wins = 0;

  getTitle();

  do {
    const correctAnswer = gameFunction();
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      wins += 1;
      count -= 1;
    } else {
      game = false;
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    }
  } while (game && count > 0);

  if (wins === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default playGame;
