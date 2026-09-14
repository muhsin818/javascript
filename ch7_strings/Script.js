let age = 25;
let password = "London1234!=@";

// =====================================================
// 1. length
// =====================================================

console.log(password.length);
// Output: 13

// =====================================================
// 2. charAt()
// =====================================================

console.log(password.charAt(0));
// Output: L

console.log(password.charAt(6));
// Output: 1

// =====================================================
// 3. charCodeAt()
// Returns the Unicode value of a character
// =====================================================

console.log(password.charCodeAt(0));
// Output: 76

// =====================================================
// 4. at()
// Gets a character at a specific position
// Supports negative indexes
// =====================================================

console.log(password.at(0));
// Output: L

console.log(password.at(-1));
// Output: @

// =====================================================
// 5. indexOf()
// Finds the first position of a character/text
// =====================================================

console.log(password.indexOf("L"));
// Output: 0

console.log(password.indexOf("="));
// Output: 11

console.log(password.indexOf("123"));
// Output: 6

// =====================================================
// 6. lastIndexOf()
// Finds the last occurrence
// =====================================================

console.log(password.lastIndexOf("o"));
// Output: 4

console.log(password.lastIndexOf("1"));
// Output: 6

// =====================================================
// 7. includes()
// Checks whether text exists
// Returns true or false
// =====================================================

console.log(password.includes("London"));
// Output: true

console.log(password.includes("JavaScript"));
// Output: false

// =====================================================
// 8. startsWith()
// Checks whether the string starts with something
// =====================================================

console.log(password.startsWith("London"));
// Output: true

console.log(password.startsWith("123"));
// Output: false

// =====================================================
// 9. endsWith()
// Checks whether the string ends with something
// =====================================================

console.log(password.endsWith("@"));
// Output: true

console.log(password.endsWith("123"));
// Output: false

// =====================================================
// 10. slice()
// Extracts part of a string
// =====================================================

console.log(password.slice(0, 6));
// Output: London

console.log(password.slice(6, 10));
// Output: 1234

console.log(password.slice(-1));
// Output: @

// =====================================================
// 11. substring()
// Extracts characters between two positions
// =====================================================

console.log(password.substring(0, 6));
// Output: London

console.log(password.substring(6, 10));
// Output: 1234

// =====================================================
// 12. substr() - OLD / DEPRECATED
// Avoid using this in new code
// =====================================================

console.log(password.substr(0, 6));
// Output: London

console.log(password.substr(6, 4));
// Output: 1234

// =====================================================
// 13. toUpperCase()
// Converts everything to uppercase
// =====================================================

console.log(password.toUpperCase());
// Output: LONDON1234!=@

// =====================================================
// 14. toLowerCase()
// Converts everything to lowercase
// =====================================================

console.log(password.toLowerCase());
// Output: london1234!=@

// =====================================================
// 15. concat()
// Joins strings together
// =====================================================

console.log(password.concat(" is my password"));
// Output: London1234!=@ is my password

// =====================================================
// 16. repeat()
// Repeats a string
// =====================================================

console.log(password.repeat(2));
// Output: London1234!=@London1234!=@

// =====================================================
// 17. replace()
// Replaces the first matching value
// =====================================================

console.log(password.replace("London", "Paris"));
// Output: Paris1234!=@

// =====================================================
// 18. replaceAll()
// Replaces all matching values
// =====================================================

let testPassword = "London London London";

console.log(testPassword.replaceAll("London", "Paris"));
// Output: Paris Paris Paris

// =====================================================
// 19. split()
// Converts a string into an array
// =====================================================

console.log(password.split(""));
// Output: [
//   'L', 'o', 'n', 'd', 'o', 'n',
//   '1', '2', '3', '4', '!', '=', '@'
// ]

// =====================================================
// 20. trim()
// Removes spaces from beginning and end
// =====================================================

let passwordWithSpaces = "   London1234!=@   ";

console.log(passwordWithSpaces.trim());
// Output: London1234!=@

// =====================================================
// 21. trimStart()
// Removes spaces from the beginning
// =====================================================

let passwordWithSpaces2 = "   London1234!=@";

console.log(passwordWithSpaces2.trimStart());
// Output: London1234!=@

// =====================================================
// 22. trimEnd()
// Removes spaces from the end
// =====================================================

let passwordWithSpaces3 = "London1234!=@   ";

console.log(passwordWithSpaces3.trimEnd());
// Output: London1234!=@

// =====================================================
// 23. padStart()
// Adds characters to the beginning
// =====================================================

console.log(password.padStart(16, "*"));
// Output: ***London1234!=@

// =====================================================
// 24. padEnd()
// Adds characters to the end
// =====================================================

console.log(password.padEnd(16, "*"));
// Output: London1234!=@***

// =====================================================
// 25. search()
// Searches for a match and returns its position
// =====================================================

console.log(password.search("London"));
// Output: 0

console.log(password.search("="));
// Output: 11

// =====================================================
// 26. match()
// Finds matches using a regular expression
// =====================================================

console.log(password.match(/[0-9]/g));
// Output: [ '1', '2', '3', '4' ]

// =====================================================
// 27. matchAll()
// Finds all matches using a regular expression
// =====================================================

let numbers = [...password.matchAll(/[0-9]/g)];

console.log(numbers.map((x) => x[0]));
// Output: [ '1', '2', '3', '4' ]

// =====================================================
// 28. localeCompare()
// Compares two strings
// =====================================================

console.log(password.localeCompare("London1234!=@"));
// Output: 0
// 0 means both strings are equal

// =====================================================
// 29. normalize()
// Normalizes Unicode text
// =====================================================

console.log(password.normalize());
// Output: London1234!=@

// =====================================================
// 30. valueOf()
// Returns the primitive string value
// =====================================================

console.log(password.valueOf());
// Output: London1234!=@

// =====================================================
// 31. toString()
// Converts a value to a string
// =====================================================

console.log(password.toString());
// Output: London1234!=@

// =====================================================
// 32. isWellFormed()
// Checks whether the string contains well-formed
// Unicode
// =====================================================

console.log(password.isWellFormed());
// Output: true

// =====================================================
// 33. toWellFormed()
// Returns a well-formed Unicode string
// =====================================================

console.log(password.toWellFormed());
// Output: London1234!=@

// =====================================================
// 34. String.raw()
// Creates a raw string
// This is a static String method
// =====================================================

console.log(String.raw`Password: ${password}`);
// Output: Password: London1234!=@

// =====================================================
// 35. String.fromCharCode()
// Creates a string from Unicode numbers
// This is a static String method
// =====================================================

console.log(String.fromCharCode(76, 111, 110, 100, 111, 110));
// Output: London

// =====================================================
// 36. String.fromCodePoint()
// Creates a string from Unicode code points
// =====================================================

console.log(String.fromCodePoint(76, 111, 110, 100, 111, 110));
// Output: London
