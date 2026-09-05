export function getMaximumPointsFromCards(points: number[], k: number) {
  if (k < 0) {
    throw new Error("Can't take exactly k cards if k is negative");
  }

  if (k > points.length) {
    throw new Error("Not enough cards available to take exactly k cards");
  }

  const cardCountMinusK = points.length - k;

  let totalPointsCount = 0;

  let firstNonTakenPointsCount = 0;

  for (let i = 0; i < cardCountMinusK; i++) {
    const currentPointsValue = points[i];
    firstNonTakenPointsCount += currentPointsValue;

    totalPointsCount += currentPointsValue;
  }

  let minimumNonTakenPointsCountSoFar = firstNonTakenPointsCount;
  let rollingNonTakenPointsCount = firstNonTakenPointsCount;

  for (
    let startIndex = 0;
    startIndex + cardCountMinusK < points.length;
    startIndex++
  ) {
    const oldNumberToDiscard = points[startIndex];
    const newNumberToAdd = points[startIndex + cardCountMinusK];
    rollingNonTakenPointsCount += newNumberToAdd - oldNumberToDiscard;

    minimumNonTakenPointsCountSoFar = Math.min(
      minimumNonTakenPointsCountSoFar,
      rollingNonTakenPointsCount,
    );

    totalPointsCount += newNumberToAdd;
  }

  return totalPointsCount - minimumNonTakenPointsCountSoFar;
}
