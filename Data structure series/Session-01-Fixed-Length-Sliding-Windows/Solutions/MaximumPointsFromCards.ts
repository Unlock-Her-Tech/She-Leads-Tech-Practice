// NOTE: this problem was covered in the practice session, as an add-on to the
// maximum subarray sum problem. Make sure to understand that one as fully as
// possible before attempting this one.

export function getMaximumPointsFromCards(points: number[], k: number) {
  if (k < 0) {
    throw new Error("Can't take exactly k cards if k is negative");
  }

  if (k > points.length) {
    throw new Error("Not enough cards available to take exactly k cards");
  }

  let totalPointsSum = 0;

  for (let i = 0; i < points.length; i++) {
    const currentPointsValue = points[i];
    totalPointsSum += currentPointsValue;
  }

  // THE PLAN: use a sliding window to work out the best cards NOT to take.
  // We need to find the window with the MINIMUM points sum, which will in
  // turn MAXIMISE the points sum of the remaining cards, which we do take.
  const windowSize = points.length - k;

  let firstWindowPointsSum = 0;

  for (let i = 0; i < windowSize; i++) {
    const currentPointsValue = points[i];
    firstWindowPointsSum += currentPointsValue;
  }

  let minimumWindowPointsSumSoFar = firstWindowPointsSum;
  let rollingWindowPointsSum = firstWindowPointsSum;

  for (
    let windowStartIndex = 0;
    windowStartIndex + windowSize < points.length;
    windowStartIndex++
  ) {
    const oldPointsValueToDiscard = points[windowStartIndex];
    const newPointsValueToAdd = points[windowStartIndex + windowSize];
    rollingWindowPointsSum += newPointsValueToAdd - oldPointsValueToDiscard;

    minimumWindowPointsSumSoFar = Math.min(
      minimumWindowPointsSumSoFar,
      rollingWindowPointsSum,
    );
  }

  const remainingPointsSum = totalPointsSum - minimumWindowPointsSumSoFar;
  return remainingPointsSum;
}
