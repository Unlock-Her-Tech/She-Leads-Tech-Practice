// NOTE: this problem was covered in both the theory session and the practice
// session. If you understand this problem and solution well, you are in a
// good position to adapt your knowledge to the other problems in this set.

export function getMaximumSubarraySum(numbers: number[], k: number) {
  if (k < 0) {
    throw new Error("Can't produce subarrays of length k if k is negative");
  }

  if (k > numbers.length) {
    throw new Error("Not enough numbers to produce subarrays of length k");
  }

  // This variable isn't strictly necessary, it's only introduced for clarity.
  // It's particularly useful as a point of comparison with other problems.
  const windowSize = k;

  // THE PLAN: work out the sum of the numbers in the first window. Once this
  // is established, work out subsequent window sums by adding a new number
  // (immediately to the right of the old window) and subtracting an old number
  // (from the left of the old window) from a rolling window sum. Find the
  // overall maximum window sum by comparing each rolling window sum with the
  // maximum seen so far.
  let firstWindowSum = 0;

  for (let i = 0; i < windowSize; i++) {
    const currentNumber = numbers[i];
    firstWindowSum += currentNumber;
  }

  let maxWindowSumSoFar = firstWindowSum;
  let rollingWindowSum = firstWindowSum;

  for (
    let windowStartIndex = 0;
    windowStartIndex + windowSize < numbers.length;
    windowStartIndex++
  ) {
    const oldNumberToDiscard = numbers[windowStartIndex];
    const newNumberToAdd = numbers[windowStartIndex + windowSize];
    rollingWindowSum += newNumberToAdd - oldNumberToDiscard;

    maxWindowSumSoFar = Math.max(maxWindowSumSoFar, rollingWindowSum);
  }

  return maxWindowSumSoFar;
}
