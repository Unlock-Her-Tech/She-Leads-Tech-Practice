// Helper function. The function with the solution body is below
function checkIfLetterCountsAreIdentical(
  letterCounts1: Map<string, number>,
  letterCounts2: Map<string, number>,
) {
  if (letterCounts1.size !== letterCounts2.size) {
    return false;
  }

  for (const [letter, letterCounts1Count] of letterCounts1.entries()) {
    const letterCounts2Count = letterCounts2.get(letter);
    if (letterCounts1Count !== letterCounts2Count) {
      return false;
    }
  }

  return true;
}

export function checkIfHaystackContainsPermutationOfNeedle(
  needle: string,
  haystack: string,
) {
  if (needle.length > haystack.length) {
    return false;
  }

  const needleLetterCounts = new Map<string, number>();
  const rollingHaystackLetterCounts = new Map<string, number>();

  for (let i = 0; i < needle.length; i++) {
    const currentNeedleLetter = needle[i];
    needleLetterCounts.set(
      currentNeedleLetter,
      (needleLetterCounts.get(currentNeedleLetter) ?? 0) + 1,
    );

    const currentHaystackLetter = haystack[i];
    rollingHaystackLetterCounts.set(
      currentHaystackLetter,
      (rollingHaystackLetterCounts.get(currentHaystackLetter) ?? 0) + 1,
    );
  }

  if (
    checkIfLetterCountsAreIdentical(
      rollingHaystackLetterCounts,
      needleLetterCounts,
    )
  ) {
    return true;
  }

  for (
    let startIndex = 0;
    startIndex + needle.length < haystack.length;
    startIndex++
  ) {
    const oldHaystackLetterToDiscard = haystack[startIndex];
    if (rollingHaystackLetterCounts.get(oldHaystackLetterToDiscard)! === 1) {
      rollingHaystackLetterCounts.delete(oldHaystackLetterToDiscard);
    } else {
      rollingHaystackLetterCounts.set(
        oldHaystackLetterToDiscard,
        rollingHaystackLetterCounts.get(oldHaystackLetterToDiscard)! - 1,
      );
    }

    const newHaystackLetterToAdd = haystack[startIndex + needle.length];
    rollingHaystackLetterCounts.set(
      newHaystackLetterToAdd,
      (rollingHaystackLetterCounts.get(newHaystackLetterToAdd) ?? 0) + 1,
    );

    if (
      checkIfLetterCountsAreIdentical(
        rollingHaystackLetterCounts,
        needleLetterCounts,
      )
    ) {
      return true;
    }
  }

  return false;
}
