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

  for (let i = 0; i < k; i++) {
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

  for (let startIndex = 0; startIndex + k < s.length; startIndex++) {
    const oldCharacterToDiscard = s[startIndex];
    const newCharacterToAdd = s[startIndex + k];

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
