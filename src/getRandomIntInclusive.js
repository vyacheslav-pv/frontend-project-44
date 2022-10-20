const getRandomIntInclusive = (min, max) => {
  const min2 = Math.ceil(min);
  const max2 = Math.floor(max);
  return Math.floor(Math.random() * (max2 - min2 + 1)) + min2;
};

export default getRandomIntInclusive;
