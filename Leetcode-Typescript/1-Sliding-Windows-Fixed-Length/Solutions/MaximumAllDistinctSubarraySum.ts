export function getMaximumAllDistinctSubarraySum(numbers: number[], k: number) {
  if (k < 0) {
    throw new Error("Can't produce subarrays of length k if k is negative");
  }

  if (k > numbers.length) {
    throw new Error("Not enough numbers to produce subarrays of length k");
  }

  const numbersPresentAtLeastOnce = new Set<number>();
  const numbersPresentAtLeastTwiceWithCounts = new Map<number, number>();

  let firstCount = 0;

  for (let i = 0; i < k; i++) {
    const currentNumber = numbers[i];
    firstCount += currentNumber;

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

  let maxCountSoFar =
    numbersPresentAtLeastTwiceWithCounts.size === 0 ? firstCount : undefined;
  let rollingCount = firstCount;

  for (let startIndex = 0; startIndex + k < numbers.length; startIndex++) {
    const oldNumberToDiscard = numbers[startIndex];
    const newNumberToAdd = numbers[startIndex + k];
    rollingCount += newNumberToAdd - oldNumberToDiscard;

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

    maxCountSoFar =
      numbersPresentAtLeastTwiceWithCounts.size === 0
        ? maxCountSoFar !== undefined
          ? Math.max(maxCountSoFar, rollingCount)
          : rollingCount
        : maxCountSoFar;
  }

  if (maxCountSoFar !== undefined) {
    return maxCountSoFar;
  }

  throw new Error("No all-distinct subarrays of length k found");
}
