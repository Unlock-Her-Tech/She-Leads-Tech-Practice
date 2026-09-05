export function getMaximumSubarrayAverage(numbers: number[], k: number) {
  if (k < 0) {
    throw new Error("Can't produce subarrays of length k if k is negative");
  }

  if (k === 0) {
    throw new Error("Can't take average of subarrays of length k if k is zero");
  }

  if (k > numbers.length) {
    throw new Error("Not enough numbers to produce subarrays of length k");
  }

  let firstCount = 0;

  for (let i = 0; i < k; i++) {
    const currentNumber = numbers[i];
    firstCount += currentNumber;
  }

  let maxCountSoFar = firstCount;
  let rollingCount = firstCount;

  for (let startIndex = 0; startIndex + k < numbers.length; startIndex++) {
    const oldNumberToDiscard = numbers[startIndex];
    const newNumberToAdd = numbers[startIndex + k];
    rollingCount += newNumberToAdd - oldNumberToDiscard;

    maxCountSoFar = Math.max(maxCountSoFar, rollingCount);
  }

  return maxCountSoFar / k;
}
