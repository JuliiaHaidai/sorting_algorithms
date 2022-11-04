function getRandomArraySize(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const maxValue = 200;

const getRandomArray = () =>
  ([...new Array(getRandomArraySize(8, 30))].map(() => Math.ceil(Math.random() * maxValue)));

export default getRandomArray;
