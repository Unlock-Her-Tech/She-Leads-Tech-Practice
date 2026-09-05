export function countSubstringsOfLength3WithDistinctCharacters(s: string) {
  let distinctSubstringCount = 0;

  for (let startIndex = 0; startIndex + 2 < s.length; startIndex++) {
    const firstCharacter = s[startIndex];
    const secondCharacter = s[startIndex + 1];
    const thirdCharacter = s[startIndex + 2];
    if (
      firstCharacter !== secondCharacter &&
      secondCharacter !== thirdCharacter &&
      thirdCharacter !== firstCharacter
    ) {
      distinctSubstringCount++;
    }
  }

  return distinctSubstringCount;
}
