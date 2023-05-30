const getProgression = () => {
  const start = Math.floor(Math.random() * 101);
  const arr = [start];
  const step = Math.floor(Math.random() * 5 + 1);
  const len = Math.floor(Math.random() * 5 + 5);
  for (let i = 1; i < len; i += 1) {
    const nextItem = arr[i - 1] + step;
    arr.push(nextItem);
  }
  const randomElement = arr[Math.floor(Math.random() * arr.length)];
  const correctAnswer = randomElement;
  const index = arr.indexOf(correctAnswer);
  arr[index] = '..';
  const question = `${arr.join(' ')}`;
  return [question, correctAnswer.toString()];
};

export default getProgression;
