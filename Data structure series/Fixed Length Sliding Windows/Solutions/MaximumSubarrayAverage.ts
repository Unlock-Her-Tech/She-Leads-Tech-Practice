// NOTE: this problem was covered in both the theory session and the practice
// session, as an add-on to the maximum subarray sum problem. Make sure to
// understand that one as fully as possible before attempting this one.

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

  // This variable isn't strictly necessary, it's only introduced for clarity.
  // It's particularly useful as a point of comparison with other problems.
  const windowSize = k;

  // THE PLAN: find the maximum window sum, as seen in the previous problem.
  // This is useful because the window with the maximum sum must also be the
  // window with the maximum average, given the close relation between these
  // two values. Finally, divide the maximum window sum by the window size to
  // obtain the maximum window average.
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

  const maxWindowAverage = maxWindowSumSoFar / windowSize;
  return maxWindowAverage;
}
