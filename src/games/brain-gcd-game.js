const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

const getGcd = () => {
  const value1 = Math.floor(Math.random() * 21);
  const value2 = Math.floor(Math.random() * 21);
  const question = `${value1} ${value2}`;
  const correctAnswer = gcd(value1, value2);
  return [question, correctAnswer.toString()];
};

export default getGcd;
