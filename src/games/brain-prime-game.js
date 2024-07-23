import playGame from '../index.js';

const getTitle = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
};

const isPrime = (n) => {
  if (n <= 1) {
    return 'no';
  }
  if (n === 2) {
    return 'yes';
  }
  if (n % 2 === 0) {
    return 'no';
  }
  const sqrt = Math.sqrt(n);
  for (let i = 3; i <= sqrt; i += 2) {
    if (n % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const gameFunction = () => {
  const random = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = isPrime(random);

  console.log(`Question: ${random}`);
  return correctAnswer;
};

const playBrainPrime = () => {
  playGame(gameFunction, getTitle);
};

export default playBrainPrime;
