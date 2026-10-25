# Extra Recursion Problems

Nine additional practice questions. Implement the matching TypeScript starter files using recursion. No solutions are included. Identify a base case and explain how each recursive call makes progress.

Examples use JavaScript-compatible JSON notation. Inputs are finite and acyclic. String exercises use ordinary ASCII characters. Additional edge-case conventions are stated explicitly below.

## 1. reverse

Return a new string with the characters in reverse order. Use recursion.

[Starter](./reverse.ts)

```ts
reverse(text: string): string
```

Examples:

- `reverse("hello")` → `"olleh"`
- `reverse("a")` → `"a"`
- `reverse("")` → `""`

## 2. isPalindrome

Return whether the input reads the same forwards and backwards. Compare characters exactly, including case and spaces. Use recursion. For this set, the empty string is a palindrome.

[Starter](./isPalindrome.ts)

```ts
isPalindrome(text: string): boolean
```

Examples:

- `isPalindrome("racecar")` → `true`
- `isPalindrome("hello")` → `false`
- `isPalindrome("")` → `true`

## 3. someRecursive

Use recursion to determine whether at least one array value satisfies the supplied predicate. Return false for an empty array. Do not use Array.prototype.some.

[Starter](./someRecursive.ts)

```ts
someRecursive(values: number[], predicate: (value: number) => boolean): boolean
```

Examples:

```ts
const isOdd = (value: number) => value % 2 !== 0;
someRecursive([2, 4, 7], isOdd) // true
someRecursive([2, 4, 6], isOdd) // false
someRecursive([], isOdd) // false
```

## 4. flatten

Return a new flat array containing every number from an arbitrarily nested array, in its original left-to-right order. Use recursion and leave the input unchanged. Do not use Array.prototype.flat.

[Starter](./flatten.ts)

```ts
flatten(values: NestedNumberArray): number[]
```

Examples:

- `flatten([1, [2, [3]], 4])` → `[1, 2, 3, 4]`
- `flatten([[], [5]])` → `[5]`
- `flatten([])` → `[]`

## 5. capitalizeFirst

Return a new array with only the first character of each string converted to uppercase. Preserve the remaining characters and leave empty strings unchanged. Use recursion and leave the input array unchanged.

[Starter](./capitalizeFirst.ts)

```ts
capitalizeFirst(words: string[]): string[]
```

Examples:

- `capitalizeFirst(["car", "apple"])` → `["Car", "Apple"]`
- `capitalizeFirst(["hELLO", ""])` → `["HELLO", ""]`
- `capitalizeFirst([])` → `[]`

## 6. nestedEvenSum

Use recursion to sum all even numeric values in an object and its nested plain objects. Ignore strings, booleans and null; do not coerce values to numbers. Inputs have no cycles. For this set, arrays are outside the input domain.

[Starter](./nestedEvenSum.ts)

```ts
nestedEvenSum(value: Record<string, unknown>): number
```

Examples:

- `nestedEvenSum({"a": 2, "nested": {"b": 4, "c": 3}})` → `6`
- `nestedEvenSum({"a": -2, "b": 0, "c": "8"})` → `-2`
- `nestedEvenSum({})` → `0`

## 7. capitalizeWords

Return a new array in which every word is entirely uppercase. Use recursion and leave the input array unchanged.

[Starter](./capitalizeWords.ts)

```ts
capitalizeWords(words: string[]): string[]
```

Examples:

- `capitalizeWords(["i", "am", "learning"])` → `["I", "AM", "LEARNING"]`
- `capitalizeWords(["Hello", ""])` → `["HELLO", ""]`
- `capitalizeWords([])` → `[]`

## 8. stringifyNumbers

Create a new object in which numeric values in the object and its nested plain objects become strings. Preserve other values, including booleans, null and existing strings. Leave the original object unchanged. Inputs have no cycles. For this set, preserve arrays unchanged rather than converting their contents.

[Starter](./stringifyNumbers.ts)

```ts
stringifyNumbers(value: Record<string, unknown>): Record<string, unknown>
```

Examples:

- `stringifyNumbers({"n": 2, "inner": {"x": 4, "ok": true}})` → `{"n": "2", "inner": {"x": "4", "ok": true}}`
- `stringifyNumbers({"n": 0, "items": [1, 2], "empty": null})` → `{"n": "0", "items": [1, 2], "empty": null}`
- `stringifyNumbers({})` → `{}`

## 9. collectStrings

Return an array containing all string values in an object and its nested plain objects, using recursion. Do not include property names or convert non-string values. Visit properties in Object.keys order and finish each nested object before moving to the next property. Inputs have no cycles; arrays are outside the input domain for this set.

[Starter](./collectStrings.ts)

```ts
collectStrings(value: Record<string, unknown>): string[]
```

Examples:

- `collectStrings({"name": "Ada", "info": {"topic": "recursion", "count": 2}})` → `["Ada", "recursion"]`
- `collectStrings({"a": "", "b": true, "c": null})` → `[""]`
- `collectStrings({})` → `[]`

