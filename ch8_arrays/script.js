let fruits = ["apple", "banana", "cherry"];

// =====================================================
// 1. length
// Returns the number of elements in the array
// =====================================================

console.log(fruits.length);
// Output: 3

// =====================================================
// 2. Accessing elements using index
// JavaScript starts counting from 0
// =====================================================

console.log(fruits[0]);
// Output: apple

console.log(fruits[1]);
// Output: banana

console.log(fruits[2]);
// Output: cherry

// =====================================================
// 3. at()
// Gets an element at a specific position
// Supports negative indexes
// =====================================================

console.log(fruits.at(0));
// Output: apple

console.log(fruits.at(-1));
// Output: cherry

// =====================================================
// 4. indexOf()
// Finds the position of an element
// =====================================================

console.log(fruits.indexOf("apple"));
// Output: 0

console.log(fruits.indexOf("cherry"));
// Output: 2

console.log(fruits.indexOf("mango"));
// Output: -1

// =====================================================
// 5. lastIndexOf()
// Finds the last occurrence of an element
// =====================================================

let fruits2 = ["apple", "banana", "apple", "cherry"];

console.log(fruits2.lastIndexOf("apple"));
// Output: 2

// =====================================================
// 6. includes()
// Checks whether an element exists
// Returns true or false
// =====================================================

console.log(fruits.includes("banana"));
// Output: true

console.log(fruits.includes("mango"));
// Output: false

// =====================================================
// 7. push()
// Adds an element to the END of the array
// =====================================================

fruits.push("mango");

console.log(fruits);
// Output: [ 'apple', 'banana', 'cherry', 'mango' ]

// =====================================================
// 8. pop()
// Removes the LAST element
// =====================================================

fruits.pop();

console.log(fruits);
// Output: [ 'apple', 'banana', 'cherry' ]

// =====================================================
// 9. unshift()
// Adds an element to the BEGINNING
// =====================================================

fruits.unshift("mango");

console.log(fruits);
// Output: [ 'mango', 'apple', 'banana', 'cherry' ]

// =====================================================
// 10. shift()
// Removes the FIRST element
// =====================================================

fruits.shift();

console.log(fruits);
// Output: [ 'apple', 'banana', 'cherry' ]

// =====================================================
// 11. concat()
// Joins two or more arrays
// =====================================================

let vegetables = ["carrot", "potato"];

let food = fruits.concat(vegetables);

console.log(food);
// Output: [ 'apple', 'banana', 'cherry', 'carrot', 'potato' ]

// =====================================================
// 12. join()
// Converts an array into a string
// =====================================================

console.log(fruits.join(", "));
// Output: apple, banana, cherry

console.log(fruits.join(" - "));
// Output: apple - banana - cherry

// =====================================================
// 13. slice()
// Copies part of an array
// Does NOT change the original array
// =====================================================

console.log(fruits.slice(0, 2));
// Output: [ 'apple', 'banana' ]

console.log(fruits.slice(1, 3));
// Output: [ 'banana', 'cherry' ]

console.log(fruits.slice(-1));
// Output: [ 'cherry' ]

// =====================================================
// 14. splice()
// Adds, removes, or replaces elements
// CHANGES the original array
// =====================================================

let fruits3 = ["apple", "banana", "cherry"];

fruits3.splice(1, 1);

console.log(fruits3);
// Output: [ 'apple', 'cherry' ]

// =====================================================
// 15. splice() - adding an element
// =====================================================

let fruits4 = ["apple", "banana", "cherry"];

fruits4.splice(1, 0, "mango");

console.log(fruits4);
// Output: [ 'apple', 'mango', 'banana', 'cherry' ]

// =====================================================
// 16. splice() - replacing an element
// =====================================================

let fruits5 = ["apple", "banana", "cherry"];

fruits5.splice(1, 1, "mango");

console.log(fruits5);
// Output: [ 'apple', 'mango', 'cherry' ]

// =====================================================
// 17. reverse()
// Reverses the array
// CHANGES the original array
// =====================================================

let fruits6 = ["apple", "banana", "cherry"];

fruits6.reverse();

console.log(fruits6);
// Output: [ 'cherry', 'banana', 'apple' ]

// =====================================================
// 18. toReversed()
// Reverses the array WITHOUT changing the original
// =====================================================

let fruits7 = ["apple", "banana", "cherry"];

console.log(fruits7.toReversed());
// Output: [ 'cherry', 'banana', 'apple' ]

console.log(fruits7);
// Output: [ 'apple', 'banana', 'cherry' ]

// =====================================================
// 19. sort()
// Sorts the array alphabetically
// =====================================================

let fruits8 = ["cherry", "apple", "banana"];

fruits8.sort();

console.log(fruits8);
// Output: [ 'apple', 'banana', 'cherry' ]

// =====================================================
// 20. toSorted()
// Sorts without changing the original array
// =====================================================

let fruits9 = ["cherry", "apple", "banana"];

console.log(fruits9.toSorted());
// Output: [ 'apple', 'banana', 'cherry' ]

console.log(fruits9);
// Output: [ 'cherry', 'apple', 'banana' ]

// =====================================================
// 21. fill()
// Replaces elements with a value
// =====================================================

let fruits10 = ["apple", "banana", "cherry"];

fruits10.fill("mango");

console.log(fruits10);
// Output: [ 'mango', 'mango', 'mango' ]

// =====================================================
// 22. find()
// Returns the first element that matches a condition
// =====================================================

let numbers = [10, 20, 30, 40];

console.log(numbers.find((num) => num > 20));
// Output: 30

// =====================================================
// 23. findIndex()
// Returns the index of the first matching element
// =====================================================

console.log(numbers.findIndex((num) => num > 20));
// Output: 2

// =====================================================
// 24. findLast()
// Returns the LAST element that matches a condition
// =====================================================

console.log(numbers.findLast((num) => num > 20));
// Output: 40

// =====================================================
// 25. findLastIndex()
// Returns the index of the LAST matching element
// =====================================================

console.log(numbers.findLastIndex((num) => num > 20));
// Output: 3

// =====================================================
// 26. filter()
// Creates a new array containing matching elements
// =====================================================

let numbers2 = [10, 15, 20, 25, 30];

console.log(numbers2.filter((num) => num > 20));
// Output: [ 25, 30 ]

// =====================================================
// 27. map()
// Creates a new array by changing every element
// =====================================================

let numbers3 = [1, 2, 3, 4];

console.log(numbers3.map((num) => num * 2));
// Output: [ 2, 4, 6, 8 ]

// =====================================================
// 28. forEach()
// Runs a function for every element
// =====================================================

fruits.forEach((fruit) => {
  console.log(fruit);
});

// Output:
// apple
// banana
// cherry

// =====================================================
// 29. some()
// Checks if AT LEAST ONE element passes the condition
// =====================================================

let numbers4 = [10, 20, 30];

console.log(numbers4.some((num) => num > 25));
// Output: true

// =====================================================
// 30. every()
// Checks if ALL elements pass the condition
// =====================================================

console.log(numbers4.every((num) => num > 5));
// Output: true

console.log(numbers4.every((num) => num > 15));
// Output: false

// =====================================================
// 31. reduce()
// Reduces an array to one value
// =====================================================

let numbers5 = [10, 20, 30];

console.log(numbers5.reduce((total, num) => total + num, 0));
// Output: 60

// =====================================================
// 32. reduceRight()
// Reduces from RIGHT to LEFT
// =====================================================

let numbers6 = [10, 20, 30];

console.log(numbers6.reduceRight((total, num) => total + num, 0));
// Output: 60

// =====================================================
// 33. flat()
// Flattens nested arrays
// =====================================================

let nestedFruits = [
  ["apple", "banana"],
  ["cherry", "mango"],
];

console.log(nestedFruits.flat());
// Output: [ 'apple', 'banana', 'cherry', 'mango' ]

// =====================================================
// 34. flatMap()
// Maps elements and then flattens the result
// =====================================================

let numbers7 = [1, 2, 3];

console.log(numbers7.flatMap((num) => [num, num * 2]));
// Output: [ 1, 2, 2, 4, 3, 6 ]

// =====================================================
// 35. Array.isArray()
// Checks whether something is an array
// =====================================================

console.log(Array.isArray(fruits));
// Output: true

console.log(Array.isArray("apple"));
// Output: false

// =====================================================
// 36. Array.from()
// Creates an array from an iterable or array-like value
// =====================================================

console.log(Array.from("apple"));
// Output: [ 'a', 'p', 'p', 'l', 'e' ]

// =====================================================
// 37. Array.of()
// Creates an array from the supplied values
// =====================================================

console.log(Array.of("apple", "banana", "cherry"));
// Output: [ 'apple', 'banana', 'cherry' ]

// =====================================================
// 38. copyWithin()
// Copies part of an array to another position
// =====================================================

let fruits11 = ["apple", "banana", "cherry", "mango"];

fruits11.copyWithin(1, 2);

console.log(fruits11);
// Output: [ 'apple', 'cherry', 'mango', 'mango' ]

// =====================================================
// 39. entries()
// Returns key/value pairs
// =====================================================

let fruitEntries = fruits.entries();

console.log([...fruitEntries]);
// Output:
// [
//   [ 0, 'apple' ],
//   [ 1, 'banana' ],
//   [ 2, 'cherry' ]
// ]

// =====================================================
// 40. keys()
// Returns the indexes
// =====================================================

console.log([...fruits.keys()]);
// Output: [ 0, 1, 2 ]

// =====================================================
// 41. values()
// Returns the values
// =====================================================

console.log([...fruits.values()]);
// Output: [ 'apple', 'banana', 'cherry' ]

// =====================================================
// 42. toString()
// Converts the array to a string
// =====================================================

console.log(fruits.toString());
// Output: apple,banana,cherry

// =====================================================
// 43. toLocaleString()
// Converts elements to a localized string
// =====================================================

console.log(fruits.toLocaleString());
// Output: apple,banana,cherry

// =====================================================
// 44. with()
// Replaces an element WITHOUT changing the original
// =====================================================

let fruits12 = ["apple", "banana", "cherry"];

console.log(fruits12.with(1, "mango"));
// Output: [ 'apple', 'mango', 'cherry' ]

console.log(fruits12);
// Output: [ 'apple', 'banana', 'cherry' ]

// =====================================================
// 45. Array.from() with map
// =====================================================

console.log(Array.from([1, 2, 3], (num) => num * 2));
// Output: [ 2, 4, 6 ]
