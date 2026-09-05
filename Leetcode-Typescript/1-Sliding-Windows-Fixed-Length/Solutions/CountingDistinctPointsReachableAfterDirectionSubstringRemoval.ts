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

  let currentXCoordinate = 0;
  let currentYCoordinate = 0;

  for (let i = k; i < s.length; i++) {
    const currentMove = s[i];
    const { xDifference, yDifference } =
      getCoordinateDifferenceForMove(currentMove);
    currentXCoordinate += xDifference;
    currentYCoordinate += yDifference;
  }

  serialisedFinalPointsSeenSoFar.add(
    serialiseCoordinatePair(currentXCoordinate, currentYCoordinate),
  );

  for (let startIndex = 0; startIndex + k < s.length; startIndex++) {
    const oldMoveToDiscard = s[startIndex + k];
    const { xDifference: oldMoveXDifference, yDifference: oldMoveYDifference } =
      getCoordinateDifferenceForMove(oldMoveToDiscard);
    currentXCoordinate -= oldMoveXDifference;
    currentYCoordinate -= oldMoveYDifference;

    const newMoveToAdd = s[startIndex];
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
