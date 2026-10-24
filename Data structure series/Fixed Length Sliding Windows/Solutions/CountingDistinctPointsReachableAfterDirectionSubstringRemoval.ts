// NOTE: this problem is a bonus, and was not covered in either the theory
// session or the practice session. It can be solved efficiently using the
// fixed-size sliding window technique (see below). It uses a data structure
// not formally covered yet (a set), so don't worry if this solution is hard
// to understand.

// Helper function. The function with the solution body is below
function serialiseCoordinatePair(xCoordinate: number, yCoordinate: number) {
  return `(${xCoordinate}, ${yCoordinate})`;
}

// Helper function. The function with the solution body is below
function getCoordinateDifferenceForMove(move: string) {
  switch (move) {
    case "U":
      return { xDifference: 0, yDifference: 1 };
    case "D":
      return { xDifference: 0, yDifference: -1 };
    case "L":
      return { xDifference: -1, yDifference: 0 };
    case "R":
      return { xDifference: 1, yDifference: 0 };
    default:
      throw new Error(`Character ${move} is not a valid move`);
  }
}

export function countDistinctPointsReachableAfterDirectionSubstringRemoval(
  s: string,
  k: number,
) {
  if (k < 0) {
    throw new Error("Can't remove substrings of length k if k is negative");
  }

  if (k > s.length) {
    throw new Error("Not enough characters to remove substrings of length k");
  }

  let serialisedFinalPointsSeenSoFar = new Set<string>();

  // This variable isn't strictly necessary, it's only introduced for clarity.
  // It's particularly useful as a point of comparison with other problems.
  const windowSize = k;

  let currentXCoordinate = 0;
  let currentYCoordinate = 0;

  for (let i = windowSize; i < s.length; i++) {
    const currentMove = s[i];
    const { xDifference, yDifference } =
      getCoordinateDifferenceForMove(currentMove);
    currentXCoordinate += xDifference;
    currentYCoordinate += yDifference;
  }

  serialisedFinalPointsSeenSoFar.add(
    serialiseCoordinatePair(currentXCoordinate, currentYCoordinate),
  );

  for (
    let windowStartIndex = 0;
    windowStartIndex + windowSize < s.length;
    windowStartIndex++
  ) {
    const oldMoveToDiscard = s[windowStartIndex + windowSize];
    const { xDifference: oldMoveXDifference, yDifference: oldMoveYDifference } =
      getCoordinateDifferenceForMove(oldMoveToDiscard);
    currentXCoordinate -= oldMoveXDifference;
    currentYCoordinate -= oldMoveYDifference;

    const newMoveToAdd = s[windowStartIndex];
    const { xDifference: newMoveXDifference, yDifference: newMoveYDifference } =
      getCoordinateDifferenceForMove(newMoveToAdd);
    currentXCoordinate += newMoveXDifference;
    currentYCoordinate += newMoveYDifference;

    serialisedFinalPointsSeenSoFar.add(
      serialiseCoordinatePair(currentXCoordinate, currentYCoordinate),
    );
  }

  return serialisedFinalPointsSeenSoFar.size;
}
