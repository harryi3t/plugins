module.exports = function (...numbers) {
  return numbers.reduce((sum, num) => {
    return sum + num;
  }, 0);
};
