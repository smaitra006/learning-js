// ===============================
// JavaScript String Methods – Notes & Examples
// ===============================

// 1. String Creation
const str1 = "Hello";
const str2 = 'Hello';
const str3 = `Hello`;
const strObj = new String("Hello"); // String object (rarely used)

// 2. String Length
const str = "JavaScript";
console.log("Length:", str.length); // 10

// 3. Accessing Characters
console.log("First character:", str[0]); // 'J'
console.log("Last character:", str[str.length - 1]); // 't'

// 4. charAt(index)
console.log("charAt(4):", str.charAt(4)); // 'S'

// 5. indexOf(searchValue, fromIndex)
const s = "the code undefined code code";
console.log("indexOf('code'):", s.indexOf("code")); // 4
console.log("indexOf('Code'):", s.indexOf("Code")); // -1 (case-sensitive)
console.log("indexOf('code', 5):", s.indexOf("code", 5)); // 19

// 6. lastIndexOf(searchValue, fromIndex)
console.log("lastIndexOf('code'):", s.lastIndexOf("code")); // 24
console.log("lastIndexOf('code', 23):", s.lastIndexOf("code", 23)); // 19

// 7. slice(start, end)
const s2 = "the morning is upon us";
console.log("slice(12):", s2.slice(12)); // "is upon us"
console.log("slice(-11):", s2.slice(-11)); // "is upon us"
console.log("slice(13, 16):", s2.slice(13, 16)); // "s u"
console.log("slice(-8, -4):", s2.slice(-8, -4)); // "upon"

// 8. substring(start, end)
console.log("substring(12):", s2.substring(12)); // "is upon us"
console.log("substring(-5):", s2.substring(-5)); // "the morning is upon us" (negative = 0)
console.log("substring(16, 13):", s2.substring(16, 13)); // "s u" (swaps if start > end)

// 9. split(separator, limit)
const csv = "a,b,c,d";
console.log("split(','):", csv.split(",")); // ['a', 'b', 'c', 'd']
console.log("split(',', 2):", csv.split(",", 2)); // ['a', 'b']

// 10. includes(searchString, position)
console.log("includes('Script'):", str.includes("Script")); // true
console.log("includes('script'):", str.includes("script")); // false (case-sensitive)

// 11. startsWith(searchString, position)
console.log("startsWith('Java'):", str.startsWith("Java")); // true
console.log("startsWith('Script', 4):", str.startsWith("Script", 4)); // true

// 12. endsWith(searchString, length)
console.log("endsWith('Script'):", str.endsWith("Script")); // true
console.log("endsWith('Java', 4):", str.endsWith("Java", 4)); // true

// 13. concat(...strings)
console.log("concat:", "Hello".concat(" ", "World!")); // "Hello World!"

// 14. repeat(count)
console.log("repeat(3):", "abc".repeat(3)); // "abcabcabc"

// 15. trim(), trimStart(), trimEnd()
const spaced = "  hello  ";
console.log("trim():", spaced.trim()); // "hello"
console.log("trimStart():", spaced.trimStart()); // "hello  "
console.log("trimEnd():", spaced.trimEnd()); // "  hello"

// 16. padStart(targetLength, padString), padEnd(targetLength, padString)
console.log("padStart(3, '0'):", "5".padStart(3, "0")); // "005"
console.log("padEnd(3, '0'):", "5".padEnd(3, "0")); // "500"

// 17. localeCompare(compareString)
console.log("'a'.localeCompare('b'):", "a".localeCompare("b")); // -1
console.log("'b'.localeCompare('a'):", "b".localeCompare("a")); // 1
console.log("'a'.localeCompare('a'):", "a".localeCompare("a")); // 0

// 18. search(regexp)
console.log("search(/\\d/):", "abc123".search(/\d/)); // 3 (index of first digit)

// 19. match(regexp)
console.log("match(/\\d/g):", "test1test2".match(/\d/g)); // ['1', '2']

// 20. matchAll(regexp)
const matches = "test1test2".matchAll(/\d/g);
console.log("matchAll(/\\d/g):", [...matches]); // Array of match objects

// 21. replace(searchValue, replaceValue)
console.log("replace('bar', 'baz'):", "foo bar".replace("bar", "baz")); // "foo baz"

// 22. replaceAll(searchValue, replaceValue)
console.log("replaceAll('bar', 'baz'):", "foo bar bar".replaceAll("bar", "baz")); // "foo baz baz"

// 23. toUpperCase(), toLowerCase()
console.log("toUpperCase():", "abc".toUpperCase()); // "ABC"
console.log("toLowerCase():", "ABC".toLowerCase()); // "abc"

// 24. valueOf()
const strObj2 = new String("abc");
console.log("valueOf():", strObj2.valueOf()); // "abc"

// 25. toString()
console.log("toString():", strObj2.toString()); // "abc"

// 26. fromCharCode(), fromCodePoint()
console.log("fromCharCode(65, 66, 67):", String.fromCharCode(65, 66, 67)); // "ABC"
console.log("fromCodePoint(9731, 9733, 9842):", String.fromCodePoint(9731, 9733, 9842)); // "☃★♲"

// 27. charCodeAt(index), codePointAt(index)
console.log("charCodeAt(0):", "ABC".charCodeAt(0)); // 65
console.log("codePointAt(0):", "ABC".codePointAt(0)); // 65

// 28. normalize([form])
console.log("normalize():", "\u0041\u030A".normalize()); // "Å"

// 29. anchor(), big(), blink(), bold(), fixed(), fontcolor(), fontsize(), italics(), link(), small(), strike(), sub(), sup()
// These return HTML strings (rarely used in modern JS)
console.log("bold():", "abc".bold()); // "<b>abc</b>"
console.log("italics():", "abc".italics()); // "<i>abc</i>"
console.log("fontcolor('red'):", "abc".fontcolor("red")); // "<font color=\"red\">abc</font>"

// 30. at(index) (ES2022)
console.log("at(1):", "hello".at(1)); // 'e'
console.log("at(-1):", "hello".at(-1)); // 'o'

// 31. raw() (for template literals)
console.log("String.raw`Line1\nLine2`:", String.raw`Line1\nLine2`); // "Line1\\nLine2"

// 32. isWellFormed() and toWellFormed() (ES2022)
console.log("'abc'.isWellFormed():", "abc".isWellFormed()); // true
console.log("'abc'.toWellFormed():", "abc".toWellFormed()); // "abc"

// 33. localeCompare(compareString, locales, options)
console.log("'ä'.localeCompare('z', 'de'):", "ä".localeCompare("z", "de")); // -1 in German locale

// 34. Example: Chaining methods
console.log(
  "  example string  "
    .trim()
    .toUpperCase()
    .replace("EXAMPLE", "SAMPLE")
); // "SAMPLE STRING"

// ===============================
// End of String Methods Summary
// ===============================
