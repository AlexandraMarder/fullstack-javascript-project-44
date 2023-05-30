const getCalc = () => {
  const value1 = Math.floor(Math.random() * 21);
  const value2 = Math.floor(Math.random() * 21);
  const arithmetic = ['+', '*', '-'];
  const randomIndex = Math.floor(Math.random() * arithmetic.length);
  const randomArithmetic = arithmetic[randomIndex];
  let correctAnswer = 0;
  const question = `${value1} ${randomArithmetic} ${value2}`;
  switch (randomArithmetic) {
    case ('+'):
      correctAnswer = value1 + value2;
      break;
    case ('*'):
      correctAnswer = value1 * value2;
      break;
    case ('-'):
      correctAnswer = value1 - value2;
      break;
    default:
      correctAnswer = 1;
  }
  return [question, correctAnswer.toString()];
};

export default getCalc;
