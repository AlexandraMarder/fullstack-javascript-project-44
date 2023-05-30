const getPrime = () => {
  const randomValue = Math.floor(Math.random() * 98 + 2);
  const question = `${randomValue}`;
  let correctAnswer;
  for (let i = 2; i < randomValue; i += 1) {
    if (randomValue % i === 0) {
      correctAnswer = 'no';
      break;
    } else {
      correctAnswer = 'yes';
    }
  }
  return [question, correctAnswer];
};

export default getPrime;
