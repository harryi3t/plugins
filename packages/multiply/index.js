module.exports = function (...numbers) {
  return numbers.reduce((product, num) => {
    return product * num;
  }, 1);
};
