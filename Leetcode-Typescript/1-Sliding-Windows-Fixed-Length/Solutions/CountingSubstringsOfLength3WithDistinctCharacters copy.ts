// NOTE: this problem is a bonus, and was not covered in either the theory
// session or the practice session. Because the window size is fixed at 3,
// which is also a conveniently small number, it's actually fine to consider
// each window from scratch. (Normally, for fixed windows of unknown sizes,
// we would add a new value and remove an old value from a window we'd
// considered previously in order to maximise efficiency.)

export function countSubstringsOfLength3WithDistinctCharacters(s: string) {
  let distinctSubstringCount = 0;

  for (
    let windowStartIndex = 0;
    windowStartIndex + 2 < s.length;
    windowStartIndex++
  ) {
    const firstCharacterInWindow = s[windowStartIndex];
    const secondCharacterInWindow = s[windowStartIndex + 1];
    const thirdCharacterInWindow = s[windowStartIndex + 2];
    if (
      firstCharacterInWindow !== secondCharacterInWindow &&
      secondCharacterInWindow !== thirdCharacterInWindow &&
      thirdCharacterInWindow !== firstCharacterInWindow
    ) {
      distinctSubstringCount++;
    }
  }

  return distinctSubstringCount;
}
