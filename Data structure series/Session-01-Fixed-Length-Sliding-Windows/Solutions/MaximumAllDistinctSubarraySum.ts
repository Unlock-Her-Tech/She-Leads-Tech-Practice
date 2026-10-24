// NOTE: this problem is a bonus, and was not covered in either the theory
// session or the practice session. It can be solved efficiently using the
// fixed-size sliding window technique (see below), but more natural solutions
// exist using other techniques which we'll study in future. In the meantime,
// don't worry if this solution is hard to understand.

export function getMaximumAllDistinctSubarraySum(numbers: number[], k: number) {
  if (k < 0) {
    throw new Error("Can't produce subarrays of length k if k is negative");
  }

  if (k > numbers.length) {
    throw new Error("Not enough numbers to produce subarrays of length k");
  }

  const numbersPresentAtLeastOnce = new Set<number>();
  const numbersPresentAtLeastTwiceWithCounts = new Map<number, number>();

  let firstWindowSum = 0;

  // This variable isn't strictly necessary, it's only introduced for clarity.
  // It's particularly useful as a point of comparison with other problems.
  const windowSize = k;

  for (let i = 0; i < windowSize; i++) {
    const currentNumber = numbers[i];
    firstWindowSum += currentNumber;

    if (!numbersPresentAtLeastOnce.has(currentNumber)) {
      numbersPresentAtLeastOnce.add(currentNumber);
    } else if (!numbersPresentAtLeastTwiceWithCounts.has(currentNumber)) {
      numbersPresentAtLeastTwiceWithCounts.set(currentNumber, 2);
    } else {
      numbersPresentAtLeastTwiceWithCounts.set(
        currentNumber,
        numbersPresentAtLeastTwiceWithCounts.get(currentNumber)! + 1,
      );
    }
  }

  let maxWindowSumSoFar =
    numbersPresentAtLeastTwiceWithCounts.size === 0
      ? firstWindowSum
      : undefined;
  let rollingWindowSum = firstWindowSum;

  for (
    let windowStartIndex = 0;
    windowStartIndex + windowSize < numbers.length;
    windowStartIndex++
  ) {
    const oldNumberToDiscard = numbers[windowStartIndex];
    const newNumberToAdd = numbers[windowStartIndex + windowSize];
    rollingWindowSum += newNumberToAdd - oldNumberToDiscard;

    if (numbersPresentAtLeastTwiceWithCounts.get(oldNumberToDiscard) === 2) {
      numbersPresentAtLeastTwiceWithCounts.delete(oldNumberToDiscard);
    } else if (numbersPresentAtLeastTwiceWithCounts.has(oldNumberToDiscard)) {
      numbersPresentAtLeastTwiceWithCounts.set(
        oldNumberToDiscard,
        numbersPresentAtLeastTwiceWithCounts.get(oldNumberToDiscard)! - 1,
      );
    } else if (numbersPresentAtLeastOnce.has(oldNumberToDiscard)) {
      numbersPresentAtLeastOnce.delete(oldNumberToDiscard);
    }

    if (!numbersPresentAtLeastOnce.has(newNumberToAdd)) {
      numbersPresentAtLeastOnce.add(newNumberToAdd);
    } else if (!numbersPresentAtLeastTwiceWithCounts.has(newNumberToAdd)) {
      numbersPresentAtLeastTwiceWithCounts.set(newNumberToAdd, 2);
    } else {
      numbersPresentAtLeastTwiceWithCounts.set(
        newNumberToAdd,
        numbersPresentAtLeastTwiceWithCounts.get(newNumberToAdd)! + 1,
      );
    }

    maxWindowSumSoFar =
      numbersPresentAtLeastTwiceWithCounts.size === 0
        ? maxWindowSumSoFar !== undefined
          ? Math.max(maxWindowSumSoFar, rollingWindowSum)
          : rollingWindowSum
        : maxWindowSumSoFar;
  }

  if (maxWindowSumSoFar !== undefined) {
    return maxWindowSumSoFar;
  }

  throw new Error("No all-distinct subarrays of length k found");
}
