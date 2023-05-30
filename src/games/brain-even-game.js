import readlineSync, { question } from 'readline-sync';

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
  const randomValue = Math.floor(Math.random() * 101);
  const question = `${randomValue}`;
  const correct = isEven(randomValue);
  return [question, correct];
};

export default getEven;
