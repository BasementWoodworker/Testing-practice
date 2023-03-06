function analyzeArray(numArray) {
  let min = Number.POSITIVE_INFINITY;
  let max = Number.NEGATIVE_INFINITY;
  let average = 0;
  for (const number of numArray) {
    if (number < min) min = number;
    if (number > max) max = number;
    average += number;
  }
  average = average / numArray.length;
  return {
    average,
    min,
    max,
    length: numArray.length
  }
}

module.exports = analyzeArray;