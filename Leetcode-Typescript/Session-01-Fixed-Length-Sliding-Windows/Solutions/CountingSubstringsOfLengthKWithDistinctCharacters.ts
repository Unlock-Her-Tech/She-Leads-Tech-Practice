// NOTE: this problem is a bonus, and was not covered in either the theory
// session or the practice session. It can be solved efficiently using the
// fixed-size sliding window technique (see below), but more natural solutions
// exist using other techniques which we'll study in future. In the meantime,
// don't worry if this solution is hard to understand.

export function countSubstringsOfLengthKWithDistinctCharacters(
  s: string,
  k: number,
) {
  if (k < 0) {
    throw new Error("Can't produce substrings of length k if k is negative");
  }

  if (k > s.length) {
    throw new Error("Not enough characters to produce substrings of length k");
  }

  const charactersPresentAtLeastOnce = new Set<string>();
  const charactersPresentAtLeastTwiceWithCounts = new Map<string, number>();

  let distinctSubstringCount = 0;

  // This variable isn't strictly necessary, it's only introduced for clarity.
  // It's particularly useful as a point of comparison with other problems.
  const windowSize = k;

  for (let i = 0; i < windowSize; i++) {
    const currentCharacter = s[i];

    if (!charactersPresentAtLeastOnce.has(currentCharacter)) {
      charactersPresentAtLeastOnce.add(currentCharacter);
    } else if (!charactersPresentAtLeastTwiceWithCounts.has(currentCharacter)) {
      charactersPresentAtLeastTwiceWithCounts.set(currentCharacter, 2);
    } else {
      charactersPresentAtLeastTwiceWithCounts.set(
        currentCharacter,
        charactersPresentAtLeastTwiceWithCounts.get(currentCharacter)! + 1,
      );
    }
  }

  if (charactersPresentAtLeastTwiceWithCounts.size === 0) {
    distinctSubstringCount++;
  }

  for (
    let windowStartIndex = 0;
    windowStartIndex + windowSize < s.length;
    windowStartIndex++
  ) {
    const oldCharacterToDiscard = s[windowStartIndex];
    const newCharacterToAdd = s[windowStartIndex + windowSize];

    if (
      charactersPresentAtLeastTwiceWithCounts.get(oldCharacterToDiscard) === 2
    ) {
      charactersPresentAtLeastTwiceWithCounts.delete(oldCharacterToDiscard);
    } else if (
      charactersPresentAtLeastTwiceWithCounts.has(oldCharacterToDiscard)
    ) {
      charactersPresentAtLeastTwiceWithCounts.set(
        oldCharacterToDiscard,
        charactersPresentAtLeastTwiceWithCounts.get(oldCharacterToDiscard)! - 1,
      );
    } else if (charactersPresentAtLeastOnce.has(oldCharacterToDiscard)) {
      charactersPresentAtLeastOnce.delete(oldCharacterToDiscard);
    }

    if (!charactersPresentAtLeastOnce.has(newCharacterToAdd)) {
      charactersPresentAtLeastOnce.add(newCharacterToAdd);
    } else if (
      !charactersPresentAtLeastTwiceWithCounts.has(newCharacterToAdd)
    ) {
      charactersPresentAtLeastTwiceWithCounts.set(newCharacterToAdd, 2);
    } else {
      charactersPresentAtLeastTwiceWithCounts.set(
        newCharacterToAdd,
        charactersPresentAtLeastTwiceWithCounts.get(newCharacterToAdd)! + 1,
      );
    }

    if (charactersPresentAtLeastTwiceWithCounts.size === 0) {
      distinctSubstringCount++;
    }
  }

  return distinctSubstringCount;
}
