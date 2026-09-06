// NOTE: this problem is a bonus, and was not covered in either the theory
// session or the practice session. It can be solved efficiently using the
// fixed-size sliding window technique (see below). It uses a data structure
// not formally covered yet (a map), so don't worry if this solution is hard
// to understand.

export function checkIfHaystackContainsPermutationOfNeedle(
  needle: string,
  haystack: string,
) {
  if (needle.length > haystack.length) {
    return false;
  }

  const needleLetterCounts = new Map<string, number>();
  const firstHaystackWindowLetterCountDifferencesFromNeedle = new Map<
    string,
    number
  >();

  for (let i = 0; i < needle.length; i++) {
    const currentNeedleLetter = needle[i];
    needleLetterCounts.set(
      currentNeedleLetter,
      (needleLetterCounts.get(currentNeedleLetter) ?? 0) + 1,
    );
    firstHaystackWindowLetterCountDifferencesFromNeedle.set(
      currentNeedleLetter,
      (firstHaystackWindowLetterCountDifferencesFromNeedle.get(
        currentNeedleLetter,
      ) ?? 0) - 1,
    );
  }

  const windowSize = needle.length;

  for (let i = 0; i < windowSize; i++) {
    const currentHaystackLetter = haystack[i];
    if (
      firstHaystackWindowLetterCountDifferencesFromNeedle.get(
        currentHaystackLetter,
      ) === -1
    ) {
      firstHaystackWindowLetterCountDifferencesFromNeedle.delete(
        currentHaystackLetter,
      );
    } else {
      firstHaystackWindowLetterCountDifferencesFromNeedle.set(
        currentHaystackLetter,
        (firstHaystackWindowLetterCountDifferencesFromNeedle.get(
          currentHaystackLetter,
        ) ?? 0) + 1,
      );
    }
  }

  if (firstHaystackWindowLetterCountDifferencesFromNeedle.size === 0) {
    return true;
  }

  const rollingHaystackWindowLetterCountDifferencesFromNeedle =
    firstHaystackWindowLetterCountDifferencesFromNeedle;

  for (
    let windowStartIndex = 0;
    windowStartIndex + windowSize < haystack.length;
    windowStartIndex++
  ) {
    const oldHaystackLetterToDiscard = haystack[windowStartIndex];
    if (
      rollingHaystackWindowLetterCountDifferencesFromNeedle.get(
        oldHaystackLetterToDiscard,
      ) === 1
    ) {
      rollingHaystackWindowLetterCountDifferencesFromNeedle.delete(
        oldHaystackLetterToDiscard,
      );
    } else {
      rollingHaystackWindowLetterCountDifferencesFromNeedle.set(
        oldHaystackLetterToDiscard,
        (rollingHaystackWindowLetterCountDifferencesFromNeedle.get(
          oldHaystackLetterToDiscard,
        ) ?? 0) - 1,
      );
    }

    const newHaystackLetterToAdd = haystack[windowStartIndex + windowSize];
    if (
      rollingHaystackWindowLetterCountDifferencesFromNeedle.get(
        newHaystackLetterToAdd,
      ) === -1
    ) {
      rollingHaystackWindowLetterCountDifferencesFromNeedle.delete(
        newHaystackLetterToAdd,
      );
    } else {
      rollingHaystackWindowLetterCountDifferencesFromNeedle.set(
        newHaystackLetterToAdd,
        (rollingHaystackWindowLetterCountDifferencesFromNeedle.get(
          newHaystackLetterToAdd,
        ) ?? 0) + 1,
      );
    }

    if (rollingHaystackWindowLetterCountDifferencesFromNeedle.size === 0) {
      return true;
    }
  }

  return false;
}
