import readlineSync from 'readline-sync';

const getName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const getQuestion = (title) => {
  if (title === 'even') {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  } else if (title === 'calc') {
    console.log('What is the result of the expression?');
  } else if (title === 'gcd') {
    console.log('Find the greatest common divisor of given numbers.');
  } else if (title === 'progression') {
    console.log('What number is missing in the progression?');
  } else if (title === 'prime') {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  }
};

const game = (title, getGame) => {
  const name = getName();
  getQuestion(title);
  let wins = 0;
  let tries = 3;
  while (tries > 0) {
    const [question, correctAnswer] = getGame();
    console.log(`Question: ${question}`);
    const guess = readlineSync.question('Your answer: ');
    if (guess === correctAnswer) {
      console.log('Correct!');
      wins += 1;
    } else {
      console.log(`'${guess}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      break;
    }
    tries -= 1;
  }
  if (tries === 0 && wins === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default game;
