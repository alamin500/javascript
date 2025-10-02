/*
 * ============================================
 * COMPREHENSIVE JAVASCRIPT REFERENCE
 * ============================================
 * 
 * This file contains 300 JavaScript concepts organized by category:
 * 
 * ARRAY METHODS (1-41, 145-146, 281, 286-290): forEach, map, filter, reduce, find, includes, toSorted, etc.
 * STRING METHODS (42-67, 201-205, 291-295): charAt, slice, replace, split, trim, at, includes, etc.
 * OBJECT METHODS (68-77, 227-235, 296-300): keys, values, entries, assign, freeze, defineProperty, hasOwn, etc.
 * NUMBER METHODS (78-85, 206-210): toFixed, parseInt, parseFloat, isInteger, isSafeInteger, etc.
 * MATH METHODS (86-95, 211-220): round, floor, ceil, max, min, random, sin, cos, log, etc.
 * DATE METHODS (96-101, 221-226): getFullYear, getMonth, setDate, toISOString, etc.
 * SET METHODS (102-105, 241-245): add, has, delete, size, clear, forEach, values, etc.
 * MAP METHODS (106-110, 236-240): set, get, has, delete, size, keys, values, forEach, clear
 * JSON METHODS (111-112): stringify, parse
 * PROMISES & ASYNC (113-118): Promise, async/await, Promise.all, etc.
 * CLASSES & OOP (119-122): class, extends, static, getters/setters
 * FUNCTIONS (123-126, 191-193): arrow functions, closures, IIFE, call, apply, bind
 * DESTRUCTURING & SPREAD (127-131): array/object destructuring, spread, rest
 * TEMPLATE LITERALS (132-135): template strings, symbols
 * ITERATORS & GENERATORS (136-137): generators, yield
 * REGULAR EXPRESSIONS (138-141): test, exec, match, replace
 * ERROR HANDLING (142-144): try/catch, custom errors
 * WEAKMAP & WEAKSET (147-148): WeakMap, WeakSet
 * PROXY & REFLECT (149-152): Proxy traps, Reflect methods
 * CONSOLE METHODS (153-157): log, error, warn, table, time
 * TIMERS (158-160): setTimeout, setInterval, clearTimeout
 * TYPE CHECKING (161-164): typeof, instanceof, isArray
 * OPTIONAL CHAINING (165-168): ?., ??
 * MODULES (169-172): import, export (syntax examples)
 * BITWISE OPERATORS (173-177): &, |, ^, <<, >>
 * BIGINT (178-179): BigInt operations
 * GLOBAL FUNCTIONS (180-186): isNaN, encodeURI, eval, etc.
 * VARIABLE DECLARATIONS (187-190): let, const, var, hoisting
 * LOOPS (194-196): for...in, for...of
 * ADVANCED OPERATORS (197-200): **, ||=, &&=, ??=
 * GLOBAL OBJECT (246-250): globalThis, new.target, hasOwnProperty, isPrototypeOf
 * JAVASCRIPT CONCEPTS (251-255): hoisting, scope, temporal dead zone
 * CURRYING & PARTIAL (256-257): currying, partial application
 * INTERNATIONALIZATION (258-261): Intl.DateTimeFormat, NumberFormat, Collator, PluralRules
 * URL API (262-266): URL, URLSearchParams
 * TYPED ARRAYS (267-271): ArrayBuffer, Uint8Array, Int16Array, Float32Array, DataView
 * TEXT ENCODING (272-273): TextEncoder, TextDecoder
 * PERFORMANCE API (274-275): performance.now, performance.mark
 * STORAGE API (276-277): localStorage, sessionStorage (conceptual)
 * BLOB & FILE (278-279): Blob, Blob.slice
 * ADVANCED FEATURES (280-285): Object.groupBy, structuredClone, WeakRef, FinalizationRegistry
 * ARRAY & OBJECT CLONING (301-320): Shallow vs Deep cloning, spread operator, Object.assign, JSON methods, structuredClone
 * 
 * References:
 * - https://www.w3schools.com/js
 * - https://www.javascripttutorial.net/
 * - https://developer.mozilla.org/ (MDN)
 * - https://javascript.info/
 * - https://www.geeksforgeeks.org/javascript/
 * 
 * Note: Some newer features require Node.js 20+ or modern browsers
 */



// 1. forEach - Loop through each item in an array and do something with it
[1,2,3].forEach(function(item,index){
    // console.log(item, index)
})
// answer: 1 0
// answer: 2 1
// answer: 3 2


// 2. map - Transform each item in an array and create a new array with the results
const three = [1,2,3];
const double = three.map(function(item){
    return item * 2
})
// console.log(double)
// answer: [ 2, 4, 6 ]


// 3. filter - Keep only items that meet a certain condition
const four = [1,2,3,4,5];
const even = four.filter(function(item){
    return item % 2 === 0
})
// console.log(even)
// answer: [ 2, 4 ]

// 4. reduce - Combine all items in an array into a single value
const five = [1,2,3,4,5];
const sum = five.reduce((accumulator, item)=>{
    return accumulator + item
}, 0)
// console.log(sum)
// answer: 15


// 5. some - Check if at least one item in the array meets a condition

const hasNegativeNumber = [1, 2, 3, -1, 5];
const hasNegative = hasNegativeNumber.some(function(item){
    return item < 0
})
// console.log(hasNegative)
// answer: true


// 6. every - Check if all items in the array meet a condition
const allPositive = [1, 2, 3, 4, 0];
const allPositives = allPositive.every(function(item){
    return item > 0
})
// console.log(allPositives)
// answer: false


// 7. find - Get the first item that meets a condition
const objects = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Jane'},
    {id: 3, name: 'Jim'},
]
const findObject = objects.find(function(item){
    return item.id === 2
})
// console.log(findObject)
// answer: { id: 2, name: 'Jane' }


// 8. findIndex - Get the position of the first item that meets a condition
const objects2 = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Jane'},
    {id: 3, name: 'Jim'},
]
const findIndex = objects2.findIndex(function(item){
    return item.id === 2
})
// console.log(findIndex)
// answer: 1


// 9. includes - Check if an array contains a specific value
const numbers = [1, 2, 3, 4, 5];
const includes = numbers.includes(3);
// console.log(includes);
// answer: true


// 10. concat - Join two or more arrays together
const numbers2 = [1, 2, 3, 4, 5];
const numbers3 = [6, 7, 8, 9, 10];
const concat = numbers2.concat(numbers3);
// console.log(concat);
// answer: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]


// 11. slice - Extract a portion of an array without changing the original
const numbers4 = [1, 2, 3, 4, 5];
const slice = numbers4.slice(1, 3);
// console.log(slice);
// answer: [ 2, 3 ]


// 12. splice - Remove or replace elements in an array (changes the original)
const numbers5 = [1, 2, 3, 4, 5];
const splice = numbers5.splice(1, 3);
// console.log(splice);
// answer: [ 2, 3, 4 ]  


// 13. push - Add one or more elements to the end of an array
const numbers6 = [1, 2, 3, 4, 5];
const push = numbers6.push(6);
// console.log(push);
// answer: 6


// 14. pop - Remove and return the last element from an array
const numbers7 = [1, 2, 3, 4, 5];
const pop = numbers7.pop();
// console.log(pop);
// answer: 5

// 15. shift - Remove and return the first element from an array
const numbers8 = [1, 2, 3, 4, 5];
const shift = numbers8.shift();
// console.log(shift);
// answer: 1


// 16. unshift - Add one or more elements to the beginning of an array
const numbers9 = [1, 2, 3, 4, 5];
const unshift = numbers9.unshift(0);
// console.log(unshift);
// answer: 6


// 17. reverse - Reverse the order of elements in an array
const numbers10 = [1, 2, 3, 4, 5];
const reverse = numbers10.reverse();
// console.log(reverse);
// answer: [ 5, 4, 3, 2, 1 ]

// 18. sort - Sort the elements of an array in place
const numbers11 = [6, 1, 2, 3, 4, 5];
const sort = numbers11.sort();
console.log(sort);
// answer: [ 1, 2, 3, 4, 5, 6 ]


// 19. join - Convert an array to a string with a separator
const numbers12 = [1, 2, 3, 4, 5];
const join = numbers12.join(',');
// console.log(join);
// answer: 1,2,3,4,5


// 20. reduceRight - Combine all items in an array from right to left
const numbers13 = [1, 2, 3, 4, 5];
const reduceRight = numbers13.reduceRight(function(accumulator, item){
    return accumulator + item
}, 0)
// console.log(reduceRight);
// answer: 15


// 21. flat - Flatten nested arrays to a specified depth
const nested = [1, 2, [3, 4, [5, 6]]];
const flattened = nested.flat(2);
// console.log(flattened);
// answer: [ 1, 2, 3, 4, 5, 6 ]


// 22. flatMap - Map each element and then flatten the result
const numbers14 = [1, 2, 3];
const flatMapped = numbers14.flatMap(function(item){
    return [item, item * 2]
})
// console.log(flatMapped);
// answer: [ 1, 2, 2, 4, 3, 6 ]


// 23. fill - Fill array elements with a static value
const numbers15 = [1, 2, 3, 4, 5];
const filled = numbers15.fill(0, 2, 4);
// console.log(filled);
// answer: [ 1, 2, 0, 0, 5 ]


// 24. indexOf - Find the first position of a value in an array
const numbers16 = [1, 2, 3, 4, 5, 3];
const indexOfThree = numbers16.indexOf(3);
// console.log(indexOfThree);
// answer: 2


// 25. lastIndexOf - Find the last position of a value in an array
const numbers17 = [1, 2, 3, 4, 5, 3];
const lastIndexOfThree = numbers17.lastIndexOf(3);
// console.log(lastIndexOfThree);
// answer: 5


// 26. at - Get an element at a specific index (supports negative indexing)
const numbers18 = [1, 2, 3, 4, 5];
const atIndex = numbers18.at(-1); // negative index
// console.log(atIndex);
// answer: 5


// 27. entries - Get an iterator of [index, value] pairs
const numbers19 = ['a', 'b', 'c'];
const entries = numbers19.entries();
for (const [index, value] of entries) {
    // console.log(index, value);
}
// answer: 0 'a'
// answer: 1 'b'
// answer: 2 'c'


// 28. keys - Get an iterator of array indices
const numbers20 = ['a', 'b', 'c'];
const keys = Array.from(numbers20.keys());
// console.log(keys);
// answer: [ 0, 1, 2 ]


// 29. values - Get an iterator of array values
const numbers21 = ['a', 'b', 'c'];
const values = Array.from(numbers21.values());
// console.log(values);
// answer: [ 'a', 'b', 'c' ]


// 30. from - Create an array from an iterable object
const fromString = Array.from('hello');
// console.log(fromString);
// answer: [ 'h', 'e', 'l', 'l', 'o' ]


// 31. isArray - Check if a value is an array
const isArr = Array.isArray([1, 2, 3]);
const isNotArr = Array.isArray('hello');
// console.log(isArr, isNotArr);
// answer: true false


// 32. of - Create an array from individual arguments
const ofArray = Array.of(1, 2, 3, 4, 5);
// console.log(ofArray);
// answer: [ 1, 2, 3, 4, 5 ]


// 33. toString - Convert an array to a string
const numbers22 = [1, 2, 3, 4, 5];
const toString = numbers22.toString();
// console.log(toString);
// answer: 1,2,3,4,5


// 34. findLast - Get the last item that meets a condition
const numbers23 = [1, 2, 3, 4, 5];
const findLast = numbers23.findLast(function(item){
    return item > 3
})
// console.log(findLast);
// answer: 5


// 35. findLastIndex - Get the position of the last item that meets a condition
const numbers24 = [1, 2, 3, 4, 5];
const findLastIndex = numbers24.findLastIndex(function(item){
    return item > 3
})
// console.log(findLastIndex);
// answer: 4


// 36. copyWithin - Copy elements within the array to different positions
const numbers25 = ['a', 'b', 'c', 'd', 'e'];
const copyWithin = numbers25.copyWithin(0, 3, 4);
// console.log(copyWithin);
// answer: [ 'd', 'b', 'c', 'd', 'e' ]


// 37. toLocaleString - Convert array to a localized string
const numbers26 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const toLocaleString = numbers26.toLocaleString('en', { timeZone: 'UTC' });
// console.log(toLocaleString);
// answer: 1,a,12/21/1997, 2:12:00 PM


// 38. with - Create a new array with an element replaced (immutable)
const numbers27 = [1, 2, 3, 4, 5];
const withReplaced = numbers27.with(2, 10);
// console.log(withReplaced);
// answer: [ 1, 2, 10, 4, 5 ]
// console.log(numbers27);
// answer: [ 1, 2, 3, 4, 5 ]


// 39. toReversed - Create a new reversed array (immutable)
const numbers28 = [1, 2, 3, 4, 5];
const toReversed = numbers28.toReversed();
// console.log(toReversed);
// answer: [ 5, 4, 3, 2, 1 ]
// console.log(numbers28);
// answer: [ 1, 2, 3, 4, 5 ]


// 40. toSorted - Create a new sorted array (immutable)
const numbers29 = [3, 1, 4, 1, 5, 9, 2];
const toSorted = numbers29.toSorted();
// console.log(toSorted);
// answer: [ 1, 1, 2, 3, 4, 5, 9 ]
// console.log(numbers29);
// answer: [ 3, 1, 4, 1, 5, 9, 2 ]


// 41. toSpliced - Create a new array with elements added/removed (immutable)
const numbers30 = [1, 2, 3, 4, 5];
const toSpliced = numbers30.toSpliced(2, 1, 6, 7);
// console.log(toSpliced);
// answer: [ 1, 2, 6, 7, 4, 5 ]
// console.log(numbers30);
// answer: [ 1, 2, 3, 4, 5 ]


// ==========================================
// STRING METHODS
// ==========================================

// 42. charAt
const str1 = "hello";
const charAt = str1.charAt(1);
// console.log(charAt);
// answer: e


// 43. charCodeAt
const str2 = "hello";
const charCodeAt = str2.charCodeAt(1);
// console.log(charCodeAt);
// answer: 101


// 44. concat (string)
const str3 = "hello";
const str4 = " world";
const concatStr = str3.concat(str4);
// console.log(concatStr);
// answer: hello world


// 45. includes (string)
const str5 = "hello world";
const includesStr = str5.includes("world");
// console.log(includesStr);
// answer: true


// 46. indexOf (string)
const str6 = "hello world";
const indexOfStr = str6.indexOf("world");
// console.log(indexOfStr);
// answer: 6


// 47. lastIndexOf (string)
const str7 = "hello world world";
const lastIndexOfStr = str7.lastIndexOf("world");
// console.log(lastIndexOfStr);
// answer: 12


// 48. slice (string)
const str8 = "hello world";
const sliceStr = str8.slice(0, 5);
// console.log(sliceStr);
// answer: hello


// 49. substring
const str9 = "hello world";
const substring = str9.substring(0, 5);
// console.log(substring);
// answer: hello


// 50. substr
const str10 = "hello world";
const substr = str10.substr(6, 5);
// console.log(substr);
// answer: world


// 51. toLowerCase
const str11 = "HELLO WORLD";
const toLowerCase = str11.toLowerCase();
// console.log(toLowerCase);
// answer: hello world


// 52. toUpperCase
const str12 = "hello world";
const toUpperCase = str12.toUpperCase();
// console.log(toUpperCase);
// answer: HELLO WORLD


// 53. trim
const str13 = "  hello world  ";
const trim = str13.trim();
// console.log(trim);
// answer: hello world


// 54. trimStart
const str14 = "  hello world  ";
const trimStart = str14.trimStart();
// console.log(trimStart);
// answer: hello world  


// 55. trimEnd
const str15 = "  hello world  ";
const trimEnd = str15.trimEnd();
// console.log(trimEnd);
// answer:   hello world


// 56. split
const str16 = "hello,world,javascript";
const split = str16.split(",");
// console.log(split);
// answer: [ 'hello', 'world', 'javascript' ]


// 57. replace
const str17 = "hello world";
const replace = str17.replace("world", "javascript");
// console.log(replace);
// answer: hello javascript


// 58. replaceAll
const str18 = "hello world world";
const replaceAll = str18.replaceAll("world", "javascript");
// console.log(replaceAll);
// answer: hello javascript javascript


// 59. repeat
const str19 = "hello";
const repeat = str19.repeat(3);
// console.log(repeat);
// answer: hellohellohello


// 60. startsWith
const str20 = "hello world";
const startsWith = str20.startsWith("hello");
// console.log(startsWith);
// answer: true


// 61. endsWith
const str21 = "hello world";
const endsWith = str21.endsWith("world");
// console.log(endsWith);
// answer: true


// 62. padStart
const str22 = "5";
const padStart = str22.padStart(3, "0");
// console.log(padStart);
// answer: 005


// 63. padEnd
const str23 = "5";
const padEnd = str23.padEnd(3, "0");
// console.log(padEnd);
// answer: 500


// 64. match
const str24 = "hello world";
const match = str24.match(/o/g);
// console.log(match);
// answer: [ 'o', 'o' ]


// 65. matchAll
const str25 = "hello world";
const matchAll = Array.from(str25.matchAll(/o/g));
// console.log(matchAll);
// answer: [ [ 'o', index: 4, input: 'hello world', groups: undefined ], [ 'o', index: 7, input: 'hello world', groups: undefined ] ]


// 66. search
const str26 = "hello world";
const search = str26.search("world");
// console.log(search);
// answer: 6


// 67. localeCompare
const str27 = "a";
const str28 = "b";
const localeCompare = str27.localeCompare(str28);
// console.log(localeCompare);
// answer: -1


// ==========================================
// OBJECT METHODS
// ==========================================

// 68. Object.keys
const obj1 = {a: 1, b: 2, c: 3};
const keys1 = Object.keys(obj1);
// console.log(keys1);
// answer: [ 'a', 'b', 'c' ]


// 69. Object.values
const obj2 = {a: 1, b: 2, c: 3};
const values1 = Object.values(obj2);
// console.log(values1);
// answer: [ 1, 2, 3 ]


// 70. Object.entries
const obj3 = {a: 1, b: 2, c: 3};
const entries1 = Object.entries(obj3);
// console.log(entries1);
// answer: [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]


// 71. Object.assign
const obj4 = {a: 1};
const obj5 = {b: 2};
const assign = Object.assign(obj4, obj5);
// console.log(assign);
// answer: { a: 1, b: 2 }


// 72. Object.freeze
const obj6 = {a: 1};
Object.freeze(obj6);
obj6.a = 2;
// console.log(obj6);
// answer: { a: 1 }


// 73. Object.seal
const obj7 = {a: 1};
Object.seal(obj7);
obj7.b = 2;
// console.log(obj7);
// answer: { a: 1 }


// 74. Object.create
const obj8 = Object.create({a: 1});
// console.log(obj8.a);
// answer: 1


// 75. Object.hasOwn
const obj9 = {a: 1};
const hasOwn = Object.hasOwn(obj9, 'a');
// console.log(hasOwn);
// answer: true


// 76. Object.fromEntries
const entries2 = [['a', 1], ['b', 2]];
const fromEntries = Object.fromEntries(entries2);
// console.log(fromEntries);
// answer: { a: 1, b: 2 }


// 77. Object.is
const is = Object.is(5, 5);
// console.log(is);
// answer: true


// ==========================================
// NUMBER METHODS
// ==========================================

// 78. toFixed
const num1 = 3.14159;
const toFixed = num1.toFixed(2);
// console.log(toFixed);
// answer: 3.14


// 79. toPrecision
const num2 = 3.14159;
const toPrecision = num2.toPrecision(3);
// console.log(toPrecision);
// answer: 3.14


// 80. toExponential
const num3 = 12345;
const toExponential = num3.toExponential(2);
// console.log(toExponential);
// answer: 1.23e+4


// 81. parseInt
const parseIntResult = parseInt("123");
// console.log(parseIntResult);
// answer: 123


// 82. parseFloat
const parseFloatResult = parseFloat("3.14");
// console.log(parseFloatResult);
// answer: 3.14


// 83. Number.isInteger
const isInteger = Number.isInteger(5);
// console.log(isInteger);
// answer: true


// 84. Number.isNaN
const isNaN = Number.isNaN(NaN);
// console.log(isNaN);
// answer: true


// 85. Number.isFinite
const isFinite = Number.isFinite(100);
// console.log(isFinite);
// answer: true


// ==========================================
// MATH METHODS
// ==========================================

// 86. Math.round
const round = Math.round(3.7);
// console.log(round);
// answer: 4


// 87. Math.floor
const floor = Math.floor(3.7);
// console.log(floor);
// answer: 3


// 88. Math.ceil
const ceil = Math.ceil(3.2);
// console.log(ceil);
// answer: 4


// 89. Math.max
const max = Math.max(1, 2, 3, 4, 5);
// console.log(max);
// answer: 5


// 90. Math.min
const min = Math.min(1, 2, 3, 4, 5);
// console.log(min);
// answer: 1


// 91. Math.abs
const abs = Math.abs(-5);
// console.log(abs);
// answer: 5


// 92. Math.pow
const pow = Math.pow(2, 3);
// console.log(pow);
// answer: 8


// 93. Math.sqrt
const sqrt = Math.sqrt(16);
// console.log(sqrt);
// answer: 4


// 94. Math.random
const random = Math.random();
// console.log(random);
// answer: (random number between 0 and 1)


// 95. Math.trunc
const trunc = Math.trunc(3.7);
// console.log(trunc);
// answer: 3


// ==========================================
// DATE METHODS
// ==========================================

// 96. getFullYear
const date1 = new Date('2024-10-01');
const getFullYear = date1.getFullYear();
// console.log(getFullYear);
// answer: 2024


// 97. getMonth
const date2 = new Date('2024-10-01');
const getMonth = date2.getMonth();
// console.log(getMonth);
// answer: 9


// 98. getDate
const date3 = new Date('2024-10-01');
const getDate = date3.getDate();
// console.log(getDate);
// answer: 1


// 99. getDay
const date4 = new Date('2024-10-01');
const getDay = date4.getDay();
// console.log(getDay);
// answer: 2


// 100. getTime
const date5 = new Date('2024-10-01');
const getTime = date5.getTime();
// console.log(getTime);
// answer: 1727740800000


// 101. Date.now
const now = Date.now();
// console.log(now);
// answer: (current timestamp)


// ==========================================
// SET METHODS
// ==========================================

// 102. Set add
const set1 = new Set();
set1.add(1);
set1.add(2);
// console.log(set1);
// answer: Set(2) { 1, 2 }


// 103. Set has
const set2 = new Set([1, 2, 3]);
const has = set2.has(2);
// console.log(has);
// answer: true


// 104. Set delete
const set3 = new Set([1, 2, 3]);
set3.delete(2);
// console.log(set3);
// answer: Set(2) { 1, 3 }


// 105. Set size
const set4 = new Set([1, 2, 3]);
const size = set4.size;
// console.log(size);
// answer: 3


// ==========================================
// MAP METHODS
// ==========================================

// 106. Map set
const map1 = new Map();
map1.set('a', 1);
map1.set('b', 2);
// console.log(map1);
// answer: Map(2) { 'a' => 1, 'b' => 2 }


// 107. Map get
const map2 = new Map([['a', 1], ['b', 2]]);
const get = map2.get('a');
// console.log(get);
// answer: 1


// 108. Map has
const map3 = new Map([['a', 1], ['b', 2]]);
const hasMap = map3.has('a');
// console.log(hasMap);
// answer: true


// 109. Map delete
const map4 = new Map([['a', 1], ['b', 2]]);
map4.delete('a');
// console.log(map4);
// answer: Map(1) { 'b' => 2 }


// 110. Map size
const map5 = new Map([['a', 1], ['b', 2]]);
const sizeMap = map5.size;
// console.log(sizeMap);
// answer: 2


// ==========================================
// JSON METHODS
// ==========================================

// 111. JSON.stringify
const obj10 = {a: 1, b: 2};
const stringify = JSON.stringify(obj10);
// console.log(stringify);
// answer: {"a":1,"b":2}


// 112. JSON.parse
const jsonStr = '{"a":1,"b":2}';
const parse = JSON.parse(jsonStr);
// console.log(parse);
// answer: { a: 1, b: 2 }


// ==========================================
// PROMISES & ASYNC/AWAIT
// ==========================================

// 113. Promise - Basic
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success!");
    }, 100);
});
promise1.then(result => console.log(result));
// answer: Success!


// 114. Promise.all
const promiseAll1 = Promise.resolve(3);
const promiseAll2 = 42;
const promiseAll3 = new Promise((resolve) => setTimeout(resolve, 100, 'foo'));
Promise.all([promiseAll1, promiseAll2, promiseAll3]).then(values => {
    // console.log(values);
});
// answer: [ 3, 42, 'foo' ]


// 115. Promise.race
const promiseRace1 = new Promise((resolve) => setTimeout(resolve, 500, 'one'));
const promiseRace2 = new Promise((resolve) => setTimeout(resolve, 100, 'two'));
Promise.race([promiseRace1, promiseRace2]).then(value => {
    // console.log(value);
});
// answer: two


// 116. Promise.allSettled
const promiseSettled1 = Promise.resolve(33);
const promiseSettled2 = Promise.reject('error');
Promise.allSettled([promiseSettled1, promiseSettled2]).then(results => {
    // console.log(results);
});
// answer: [ { status: 'fulfilled', value: 33 }, { status: 'rejected', reason: 'error' } ]


// 117. Promise.any
const promiseAny1 = Promise.reject('error1');
const promiseAny2 = Promise.resolve('success');
Promise.any([promiseAny1, promiseAny2]).then(value => {
    // console.log(value);
});
// answer: success


// 118. async/await
async function fetchData() {
    const data = await Promise.resolve("Async data");
    return data;
}
fetchData().then(result => console.log(result));
// answer: Async data


// ==========================================
// CLASSES & OOP
// ==========================================

// 119. Class - Basic
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, I'm ${this.name}`;
    }
}
const person1 = new Person("John", 30);
// console.log(person1.greet());
// answer: Hello, I'm John


// 120. Class Inheritance
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    study() {
        return `${this.name} is studying`;
    }
}
// const student1 = new Student("Alice", 20, "A");
// console.log(student1.study());
// answer: Alice is studying


// 121. Static Methods
class MathHelper {
    static add(a, b) {
        return a + b;
    }
}
// console.log(MathHelper.add(5, 3));
// answer: 8


// 122. Getters and Setters
class Circle {
    constructor(radius) {
        this._radius = radius;
    }
    get diameter() {
        return this._radius * 2;
    }
    set diameter(diameter) {
        this._radius = diameter / 2;
    }
}
const circle1 = new Circle(5);
// console.log(circle1.diameter);
// answer: 10


// ==========================================
// ARROW FUNCTIONS & CLOSURES
// ==========================================

// 123. Arrow Function
const arrowAdd = (a, b) => a + b;
// console.log(arrowAdd(3, 4));
// answer: 7


// 124. Arrow Function with Array Methods
const arrNums = [1, 2, 3, 4, 5];
const doubled = arrNums.map(n => n * 2);
// console.log(doubled);
// answer: [ 2, 4, 6, 8, 10 ]


// 125. Closure
function outerFunction(x) {
    return function innerFunction(y) {
        return x + y;
    }
}
const addFive = outerFunction(5);
// console.log(addFive(3));
// answer: 8


// 126. IIFE (Immediately Invoked Function Expression)
const iifeResult = (function() {
    return "IIFE executed";
})();
// console.log(iifeResult);
// answer: IIFE executed


// ==========================================
// DESTRUCTURING & SPREAD
// ==========================================

// 127. Array Destructuring
const [first, second, third] = [10, 20, 30];
// console.log(second);
// answer: 20


// 128. Object Destructuring
const personObj = {name: "Bob", age: 25, city: "NYC"};
const {name, age} = personObj;
// console.log(name);
// answer: Bob


// 129. Spread Operator (Array)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
// console.log(combined);
// answer: [ 1, 2, 3, 4, 5, 6 ]


// 130. Spread Operator (Object)
const obj11 = {a: 1, b: 2};
const obj12 = {c: 3, d: 4};
const combinedObj = {...obj11, ...obj12};
// console.log(combinedObj);
// answer: { a: 1, b: 2, c: 3, d: 4 }


// 131. Rest Parameters
function sumAll(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
// console.log(sumAll(1, 2, 3, 4, 5));
// answer: 15


// ==========================================
// TEMPLATE LITERALS & SYMBOLS
// ==========================================

// 132. Template Literals
const nameVar = "World";
const greeting = `Hello, ${nameVar}!`;
// console.log(greeting);
// answer: Hello, World!


// 133. Template Literals - Multiline
const multiline = `This is
a multiline
string`;
// console.log(multiline.split('\n').length);
// answer: 3


// 134. Symbol
const sym1 = Symbol('description');
const sym2 = Symbol('description');
// console.log(sym1 === sym2);
// answer: false


// 135. Symbol.for
const globalSym1 = Symbol.for('app.id');
const globalSym2 = Symbol.for('app.id');
// console.log(globalSym1 === globalSym2);
// answer: true


// ==========================================
// ITERATORS & GENERATORS
// ==========================================

// 136. Generator Function
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}
const gen = numberGenerator();
// console.log(gen.next().value);
// answer: 1


// 137. Generator with Loop
function* countUpTo(max) {
    let count = 1;
    while (count <= max) {
        yield count++;
    }
}
const counter = countUpTo(3);
// console.log([...counter]);
// answer: [ 1, 2, 3 ]


// ==========================================
// REGULAR EXPRESSIONS
// ==========================================

// 138. RegExp test
const regexTest = /hello/i;
// console.log(regexTest.test("Hello World"));
// answer: true


// 139. RegExp exec
const regexExec = /(\d+)/g;
const execResult = regexExec.exec("abc123def");
// console.log(execResult[0]);
// answer: 123


// 140. String match with RegExp
const matchStr = "The year is 2024";
const yearMatch = matchStr.match(/\d{4}/);
// console.log(yearMatch[0]);
// answer: 2024


// 141. String replace with RegExp
const replaceStr = "Hello World";
const replacedStr = replaceStr.replace(/world/i, "JavaScript");
// console.log(replacedStr);
// answer: Hello JavaScript


// ==========================================
// ERROR HANDLING
// ==========================================

// 142. try...catch
try {
    throw new Error("Custom error");
} catch (error) {
    // console.log(error.message);
}
// answer: Custom error


// 143. try...catch...finally
let finallyResult = "";
try {
    finallyResult += "try ";
} catch (e) {
    finallyResult += "catch ";
} finally {
    finallyResult += "finally";
}
// console.log(finallyResult);
// answer: try finally


// 144. Custom Error
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}
try {
    throw new CustomError("This is custom");
} catch (e) {
    // console.log(e.name);
}
// answer: CustomError


// ==========================================
// ADVANCED ARRAY METHODS
// ==========================================

// 145. Array.from with mapping
const arrayFromMap = Array.from([1, 2, 3], x => x * 2);
// console.log(arrayFromMap);
// answer: [ 2, 4, 6 ]


// 146. Array.of vs Array constructor
const arrOf = Array.of(3);
const arrConstructor = Array(3);
// console.log(arrOf.length, arrConstructor.length);
// answer: 1 3


// ==========================================
// WEAKMAP & WEAKSET
// ==========================================

// 147. WeakMap
const weakMap = new WeakMap();
const weakKey = {id: 1};
weakMap.set(weakKey, "value");
// console.log(weakMap.get(weakKey));
// answer: value


// 148. WeakSet
const weakSet = new WeakSet();
const weakObj = {id: 1};
weakSet.add(weakObj);
// console.log(weakSet.has(weakObj));
// answer: true


// ==========================================
// PROXY & REFLECT
// ==========================================

// 149. Proxy - get trap
const targetObj = {message: "Hello"};
const proxyObj = new Proxy(targetObj, {
    get: (target, prop) => {
        return prop in target ? target[prop] : "Not found";
    }
});
// console.log(proxyObj.message);
// answer: Hello


// 150. Proxy - set trap
const validatedObj = new Proxy({}, {
    set: (target, prop, value) => {
        if (prop === 'age' && typeof value !== 'number') {
            throw new TypeError('Age must be a number');
        }
        target[prop] = value;
        return true;
    }
});
validatedObj.age = 30;
// console.log(validatedObj.age);
// answer: 30


// 151. Reflect.has
const reflectObj = {a: 1, b: 2};
// console.log(Reflect.has(reflectObj, 'a'));
// answer: true


// 152. Reflect.get
const reflectGetObj = {x: 10, y: 20};
// console.log(Reflect.get(reflectGetObj, 'x'));
// answer: 10


// ==========================================
// CONSOLE METHODS
// ==========================================

// 153. // console.log
// console.log("Standard log");
// answer: Standard log


// 154. console.error
console.error("This is an error");
// answer: This is an error


// 155. console.warn
console.warn("This is a warning");
// answer: This is a warning


// 156. console.table
// console.table([{name: "Alice", age: 25}, {name: "Bob", age: 30}]);
// answer: (displays table format)


// 157. console.time / console.timeEnd
console.time("timer");
for (let i = 0; i < 1000; i++) {}
console.timeEnd("timer");
// answer: timer: (time in ms)


// ==========================================
// TIMERS
// ==========================================

// 158. setTimeout
setTimeout(() => {
    // console.log("Delayed message");
}, 1000);
// answer: Delayed message (after 1 second)


// 159. setInterval
let intervalCount = 0;
const intervalId = setInterval(() => {
    intervalCount++;
    if (intervalCount === 3) {
        clearInterval(intervalId);
        // console.log("Interval stopped");
    }
}, 100);
// answer: Interval stopped (after ~300ms)


// 160. clearTimeout
const timeoutId = setTimeout(() => {
    // console.log("This won't run");
}, 1000);
clearTimeout(timeoutId);
// console.log("Timeout cleared");
// answer: Timeout cleared


// ==========================================
// TYPE CHECKING
// ==========================================

// 161. typeof operator
// console.log(typeof "hello");
// answer: string


// 162. instanceof operator
const dateObj = new Date();
// console.log(dateObj instanceof Date);
// answer: true


// 163. Array.isArray
// console.log(Array.isArray([1, 2, 3]));
// answer: true


// 164. Object.prototype.toString
// console.log(Object.prototype.toString.call([]));
// answer: [object Array]


// ==========================================
// OPTIONAL CHAINING & NULLISH COALESCING
// ==========================================

// 165. Optional Chaining
const userOptional = {profile: {name: "John"}};
// console.log(userOptional?.profile?.name);
// answer: John


// 166. Optional Chaining - undefined case
const userOptional2 = {};
// console.log(userOptional2?.profile?.name);
// answer: undefined


// 167. Nullish Coalescing
const valueNull = null;
const result1 = valueNull ?? "default";
// console.log(result1);
// answer: default


// 168. Nullish Coalescing vs OR
const valueZero = 0;
const result2 = valueZero ?? "default";
const result3 = valueZero || "default";
// console.log(result2, result3);
// answer: 0 default


// ==========================================
// MODULES (conceptual - can't run in single file)
// ==========================================

// 169. export (example syntax)
// export const myVar = 10;
// export function myFunction() { return "hello"; }


// 170. import (example syntax)
// import { myVar, myFunction } from './module.js';


// 171. export default (example syntax)
// export default class MyClass {}


// 172. import default (example syntax)
// import MyClass from './MyClass.js';


// ==========================================
// BITWISE OPERATORS
// ==========================================

// 173. Bitwise AND
const bitwiseAnd = 5 & 3;
// console.log(bitwiseAnd);
// answer: 1


// 174. Bitwise OR
const bitwiseOr = 5 | 3;
// console.log(bitwiseOr);
// answer: 7


// 175. Bitwise XOR
const bitwiseXor = 5 ^ 3;
// console.log(bitwiseXor);
// answer: 6


// 176. Left Shift
const leftShift = 5 << 1;
// console.log(leftShift);
// answer: 10


// 177. Right Shift
const rightShift = 5 >> 1;
// console.log(rightShift);
// answer: 2


// ==========================================
// BIGINT
// ==========================================

// 178. BigInt creation
const bigInt1 = 9007199254740991n;
const bigInt2 = BigInt(9007199254740991);
// console.log(bigInt1);
// answer: 9007199254740991n


// 179. BigInt operations
const bigIntSum = 10n + 20n;
// console.log(bigIntSum);
// answer: 30n


// ==========================================
// GLOBAL FUNCTIONS
// ==========================================

// 180. isNaN (global)
// console.log(isNaN("hello"));
// answer: true


// 181. isFinite (global)
// console.log(isFinite(100));
// answer: true


// 182. encodeURI
const encodedURI = encodeURI("https://example.com/hello world");
// console.log(encodedURI);
// answer: https://example.com/hello%20world


// 183. decodeURI
const decodedURI = decodeURI("https://example.com/hello%20world");
// console.log(decodedURI);
// answer: https://example.com/hello world


// 184. encodeURIComponent
const encodedComp = encodeURIComponent("hello world");
// console.log(encodedComp);
// answer: hello%20world


// 185. decodeURIComponent
const decodedComp = decodeURIComponent("hello%20world");
// console.log(decodedComp);
// answer: hello world


// 186. eval (not recommended)
const evalResult = eval("2 + 2");
// console.log(evalResult);
// answer: 4


// ==========================================
// VARIABLE DECLARATIONS (let, const, var)
// ==========================================

// 187. let - block scoped
{
    let letVar = "block scoped";
    // console.log(letVar);
}
// answer: block scoped
// // console.log(letVar); // Would throw ReferenceError


// 188. const - constant
const constVar = "constant";
// console.log(constVar);
// answer: constant
// constVar = "new"; // Would throw TypeError


// 189. var - function scoped
function varTest() {
    var varVar = "function scoped";
    return varVar;
}
// console.log(varTest());
// answer: function scoped


// 190. var hoisting
// console.log(hoistedVar);
var hoistedVar = "hoisted";
// answer: undefined


// ==========================================
// ADVANCED FUNCTION METHODS
// ==========================================

// 191. call() method
function greetCall(greeting) {
    return `${greeting}, ${this.name}`;
}
const personCall = {name: "Alice"};
// console.log(greetCall.call(personCall, "Hello"));
// answer: Hello, Alice


// 192. apply() method
function greetApply(greeting, punctuation) {
    return `${greeting}, ${this.name}${punctuation}`;
}
const personApply = {name: "Bob"};
// console.log(greetApply.apply(personApply, ["Hi", "!"]));
// answer: Hi, Bob!


// 193. bind() method
function greetBind() {
    return `Hello, ${this.name}`;
}
const personBind = {name: "Charlie"};
const boundGreet = greetBind.bind(personBind);
// console.log(boundGreet());
// answer: Hello, Charlie


// ==========================================
// LOOPS - for...in & for...of
// ==========================================

// 194. for...in loop (objects)
const objForIn = {a: 1, b: 2, c: 3};
const keysForIn = [];
for (let key in objForIn) {
    keysForIn.push(key);
}
// console.log(keysForIn);
// answer: [ 'a', 'b', 'c' ]


// 195. for...of loop (iterables)
const arrForOf = [10, 20, 30];
const valuesForOf = [];
for (let value of arrForOf) {
    valuesForOf.push(value);
}
// console.log(valuesForOf);
// answer: [ 10, 20, 30 ]


// 196. for...of with strings
let strForOf = "";
for (let char of "hello") {
    strForOf += char.toUpperCase();
}
// console.log(strForOf);
// answer: HELLO


// ==========================================
// ADVANCED OPERATORS
// ==========================================

// 197. Exponentiation operator (**)
const exponential = 2 ** 3;
// console.log(exponential);
// answer: 8


// 198. Logical OR assignment (||=)
let orAssign = null;
orAssign ||= "default";
// console.log(orAssign);
// answer: default


// 199. Logical AND assignment (&&=)
let andAssign = "value";
andAssign &&= "new value";
// console.log(andAssign);
// answer: new value


// 200. Nullish assignment (??=)
let nullishAssign = null;
nullishAssign ??= "default value";
// console.log(nullishAssign);
// answer: default value


// ==========================================
// MORE STRING METHODS
// ==========================================

// 201. codePointAt
const strCodePoint = "😀";
// console.log(strCodePoint.codePointAt(0));
// answer: 128512


// 202. String.fromCharCode
const fromCharCode = String.fromCharCode(65, 66, 67);
// console.log(fromCharCode);
// answer: ABC


// 203. String.fromCodePoint
const fromCodePoint = String.fromCodePoint(128512);
// console.log(fromCodePoint);
// answer: 😀


// 204. normalize
const strNormalize = "café";
// console.log(strNormalize.normalize().length);
// answer: 4


// 205. String.raw
const rawStr = String.raw`C:\Users\name`;
// console.log(rawStr);
// answer: C:\Users\name


// ==========================================
// MORE NUMBER METHODS
// ==========================================

// 206. Number.isSafeInteger
// console.log(Number.isSafeInteger(123));
// answer: true


// 207. Number.EPSILON
// console.log(Number.EPSILON > 0);
// answer: true


// 208. Number.MAX_SAFE_INTEGER
// console.log(Number.MAX_SAFE_INTEGER);
// answer: 9007199254740991


// 209. Number.MIN_SAFE_INTEGER
// console.log(Number.MIN_SAFE_INTEGER);
// answer: -9007199254740991


// 210. toLocaleString (number)
const numLocale = 123456.789;
// console.log(numLocale.toLocaleString('en-US'));
// answer: 123,456.789


// ==========================================
// MORE MATH METHODS
// ==========================================

// 211. Math.sign
// console.log(Math.sign(-5));
// answer: -1


// 212. Math.cbrt (cube root)
// console.log(Math.cbrt(27));
// answer: 3


// 213. Math.log
// console.log(Math.log(Math.E));
// answer: 1


// 214. Math.log10
// console.log(Math.log10(100));
// answer: 2


// 215. Math.log2
// console.log(Math.log2(8));
// answer: 3


// 216. Math.exp
// console.log(Math.exp(0));
// answer: 1


// 217. Math.sin
// console.log(Math.sin(0));
// answer: 0


// 218. Math.cos
// console.log(Math.cos(0));
// answer: 1


// 219. Math.PI
// console.log(Math.PI.toFixed(2));
// answer: 3.14


// 220. Math.E
// console.log(Math.E.toFixed(2));
// answer: 2.72


// ==========================================
// MORE DATE METHODS
// ==========================================

// 221. setFullYear
const dateSet1 = new Date();
dateSet1.setFullYear(2025);
// console.log(dateSet1.getFullYear());
// answer: 2025


// 222. setMonth
const dateSet2 = new Date('2024-01-01');
dateSet2.setMonth(11);
// console.log(dateSet2.getMonth());
// answer: 11


// 223. setDate
const dateSet3 = new Date('2024-01-01');
dateSet3.setDate(15);
// console.log(dateSet3.getDate());
// answer: 15


// 224. toISOString
const dateISO = new Date('2024-10-01');
// console.log(dateISO.toISOString().substring(0, 10));
// answer: 2024-10-01


// 225. toDateString
const dateDateStr = new Date('2024-10-01');
// console.log(dateDateStr.toDateString().includes('2024'));
// answer: true


// 226. toTimeString
const dateTimeStr = new Date('2024-10-01 12:00:00');
// console.log(dateTimeStr.toTimeString().includes('12:'));
// answer: true


// ==========================================
// MORE OBJECT METHODS
// ==========================================

// 227. Object.defineProperty
const objDefine = {};
Object.defineProperty(objDefine, 'prop', {
    value: 42,
    writable: false
});
// console.log(objDefine.prop);
// answer: 42


// 228. Object.getOwnPropertyDescriptor
const objDescriptor = {a: 1};
const descriptor = Object.getOwnPropertyDescriptor(objDescriptor, 'a');
// console.log(descriptor.value);
// answer: 1


// 229. Object.getOwnPropertyNames
const objPropNames = {a: 1, b: 2};
// console.log(Object.getOwnPropertyNames(objPropNames));
// answer: [ 'a', 'b' ]


// 230. Object.preventExtensions
const objPrevent = {a: 1};
Object.preventExtensions(objPrevent);
objPrevent.b = 2;
// console.log(objPrevent.b);
// answer: undefined


// 231. Object.isExtensible
const objExtensible = {a: 1};
// console.log(Object.isExtensible(objExtensible));
// answer: true


// 232. Object.isFrozen
const objFrozen = Object.freeze({a: 1});
// console.log(Object.isFrozen(objFrozen));
// answer: true


// 233. Object.isSealed
const objSealed = Object.seal({a: 1});
// console.log(Object.isSealed(objSealed));
// answer: true


// 234. Object.getPrototypeOf
const objProto = Object.create({x: 1});
// console.log(Object.getPrototypeOf(objProto).x);
// answer: 1


// 235. Object.setPrototypeOf
const objSetProto = {a: 1};
Object.setPrototypeOf(objSetProto, {b: 2});
// console.log(objSetProto.b);
// answer: 2


// ==========================================
// MORE MAP METHODS
// ==========================================

// 236. Map.keys()
const mapKeys = new Map([['a', 1], ['b', 2]]);
// console.log([...mapKeys.keys()]);
// answer: [ 'a', 'b' ]


// 237. Map.values()
const mapValues = new Map([['a', 1], ['b', 2]]);
// console.log([...mapValues.values()]);
// answer: [ 1, 2 ]


// 238. Map.entries()
const mapEntries = new Map([['a', 1]]);
// console.log([...mapEntries.entries()]);
// answer: [ [ 'a', 1 ] ]


// 239. Map.forEach()
const mapForEach = new Map([['a', 1], ['b', 2]]);
let mapSum = 0;
mapForEach.forEach(value => mapSum += value);
// console.log(mapSum);
// answer: 3


// 240. Map.clear()
const mapClear = new Map([['a', 1], ['b', 2]]);
mapClear.clear();
// console.log(mapClear.size);
// answer: 0


// ==========================================
// MORE SET METHODS
// ==========================================

// 241. Set.clear()
const setClear = new Set([1, 2, 3]);
setClear.clear();
// console.log(setClear.size);
// answer: 0


// 242. Set.forEach()
const setForEach = new Set([1, 2, 3]);
let setSum = 0;
setForEach.forEach(value => setSum += value);
// console.log(setSum);
// answer: 6


// 243. Set.values()
const setValues = new Set(['a', 'b', 'c']);
// console.log([...setValues.values()]);
// answer: [ 'a', 'b', 'c' ]


// 244. Set.keys() (same as values for Set)
const setKeys = new Set(['a', 'b', 'c']);
// console.log([...setKeys.keys()]);
// answer: [ 'a', 'b', 'c' ]


// 245. Set.entries()
const setEntries = new Set(['a', 'b']);
// console.log([...setEntries.entries()]);
// answer: [ [ 'a', 'a' ], [ 'b', 'b' ] ]


// ==========================================
// GLOBAL OBJECT & SPECIAL FEATURES
// ==========================================

// 246. globalThis
// console.log(typeof globalThis);
// answer: object


// 247. new.target in constructor
function MyConstructor() {
    // console.log(new.target !== undefined);
}
new MyConstructor();
// answer: true


// 248. Function.prototype.toString
function myFunc() { return 1; }
// console.log(myFunc.toString().includes('return'));
// answer: true


// 249. Object.prototype.hasOwnProperty
const objHasOwn = {a: 1};
// console.log(objHasOwn.hasOwnProperty('a'));
// answer: true


// 250. Object.prototype.isPrototypeOf
const objProtoOf = {a: 1};
const objChild = Object.create(objProtoOf);
// console.log(objProtoOf.isPrototypeOf(objChild));
// answer: true


// ==========================================
// JAVASCRIPT CONCEPTS (Hoisting, Scope, etc.)
// ==========================================

// 251. Hoisting example (function)
// console.log(hoistedFunc());
function hoistedFunc() {
    return "hoisted";
}
// answer: hoisted


// 252. Scope - Block scope
{
    const blockScoped = "inside block";
}
// // console.log(blockScoped); // Would throw ReferenceError
// console.log("Block scope works");
// answer: Block scope works


// 253. Scope - Function scope
function funcScope() {
    var funcScoped = "inside function";
    return funcScoped;
}
// console.log(funcScope());
// answer: inside function


// 254. Temporal Dead Zone (TDZ)
// // console.log(tdzVar); // Would throw ReferenceError
let tdzVar = "initialized";
// console.log(tdzVar);
// answer: initialized


// 255. Default parameters with destructuring
function destructDefault({name = "Guest", age = 0} = {}) {
    return `${name} is ${age}`;
}
// console.log(destructDefault());
// answer: Guest is 0


// ==========================================
// CURRYING & PARTIAL APPLICATION
// ==========================================

// 256. Currying - basic
function curry(f) {
    return function(a) {
        return function(b) {
            return f(a, b);
        };
    };
}
function sumCurry(a, b) {
    return a + b;
}
const curriedSum = curry(sumCurry);
// console.log(curriedSum(1)(2));
// answer: 3


// 257. Partial application
function partial(func, ...argsBound) {
    return function(...args) {
        return func.call(this, ...argsBound, ...args);
    }
}
function multiply(a, b, c) {
    return a * b * c;
}
const multiplyByTwo = partial(multiply, 2);
// console.log(multiplyByTwo(3, 4));
// answer: 24


// ==========================================
// INTL - INTERNATIONALIZATION API
// ==========================================

// 258. Intl.DateTimeFormat
const dateIntl = new Date('2024-10-01');
const formatter = new Intl.DateTimeFormat('en-US');
// console.log(formatter.format(dateIntl).includes('2024'));
// answer: true


// 259. Intl.NumberFormat
const numFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
// console.log(numFormatter.format(1234.56));
// answer: $1,234.56


// 260. Intl.Collator
const collator = new Intl.Collator('en');
// console.log(collator.compare('a', 'b'));
// answer: -1


// 261. Intl.PluralRules
const pluralRules = new Intl.PluralRules('en-US');
// console.log(pluralRules.select(1));
// answer: one


// ==========================================
// URL & URLSEARCHPARAMS
// ==========================================

// 262. URL constructor
const urlObj = new URL('https://example.com/path?name=value');
// console.log(urlObj.hostname);
// answer: example.com


// 263. URL pathname
const urlPath = new URL('https://example.com/path/to/page');
// console.log(urlPath.pathname);
// answer: /path/to/page


// 264. URLSearchParams
const params = new URLSearchParams('foo=1&bar=2');
// console.log(params.get('foo'));
// answer: 1


// 265. URLSearchParams - append
const params2 = new URLSearchParams();
params2.append('key', 'value');
// console.log(params2.toString());
// answer: key=value


// 266. URLSearchParams - has
const params3 = new URLSearchParams('a=1&b=2');
// console.log(params3.has('a'));
// answer: true


// ==========================================
// TYPED ARRAYS & ARRAYBUFFER
// ==========================================

// 267. ArrayBuffer
const buffer = new ArrayBuffer(16);
// console.log(buffer.byteLength);
// answer: 16


// 268. Uint8Array
const uint8 = new Uint8Array([1, 2, 3, 4]);
// console.log(uint8[0]);
// answer: 1


// 269. Int16Array
const int16 = new Int16Array([1000, 2000, 3000]);
// console.log(int16[1]);
// answer: 2000


// 270. Float32Array
const float32 = new Float32Array([1.5, 2.5, 3.5]);
// console.log(float32[0]);
// answer: 1.5


// 271. DataView
const bufferView = new ArrayBuffer(2);
const dataView = new DataView(bufferView);
dataView.setUint8(0, 255);
// console.log(dataView.getUint8(0));
// answer: 255


// ==========================================
// TEXTENCODER & TEXTDECODER
// ==========================================

// 272. TextEncoder
const encoder = new TextEncoder();
const encoded = encoder.encode('hello');
// console.log(encoded[0]);
// answer: 104


// 273. TextDecoder
const decoder = new TextDecoder();
const decoded = decoder.decode(new Uint8Array([104, 101, 108, 108, 111]));
// console.log(decoded);
// answer: hello


// ==========================================
// PERFORMANCE API
// ==========================================

// 274. performance.now()
const startTime = performance.now();
const endTime = performance.now();
// console.log(endTime >= startTime);
// answer: true


// 275. performance.mark
performance.mark('start');
performance.mark('end');
// console.log(performance.getEntriesByType('mark').length >= 2);
// answer: true


// ==========================================
// WEB STORAGE API
// ==========================================

// 276. localStorage.setItem (conceptual)
// localStorage.setItem('key', 'value');
// // console.log(localStorage.getItem('key'));
// answer: value


// 277. sessionStorage (conceptual)
// sessionStorage.setItem('sessionKey', 'sessionValue');
// // console.log(sessionStorage.getItem('sessionKey'));
// answer: sessionValue


// ==========================================
// BLOB & FILE API
// ==========================================

// 278. Blob
const blobObj = new Blob(['Hello, world!'], { type: 'text/plain' });
// console.log(blobObj.size);
// answer: 13


// 279. Blob.slice
const blob2 = new Blob(['Hello, world!']);
const slicedBlob = blob2.slice(0, 5);
// console.log(slicedBlob.size);
// answer: 5


// ==========================================
// MORE ADVANCED CONCEPTS
// ==========================================

// 280. Object.groupBy (ES2024)
const inventoryGroup = [
    { type: 'fruit', name: 'apple' },
    { type: 'vegetable', name: 'carrot' },
    { type: 'fruit', name: 'banana' }
];
// const grouped = Object.groupBy(inventoryGroup, item => item.type);
// console.log(grouped.fruit.length);
// answer: 2


// 281. Array.prototype.toSorted with custom comparator
const unsortedNums = [3, 1, 4, 1, 5];
const sortedDesc = unsortedNums.toSorted((a, b) => b - a);
// console.log(sortedDesc[0]);
// answer: 5


// 282. Structured Clone
const original = { a: 1, b: { c: 2 } };
const cloned = structuredClone(original);
cloned.b.c = 3;
// console.log(original.b.c);
// answer: 2


// 283. Atomics (for SharedArrayBuffer)
// const sab = new SharedArrayBuffer(1024);
// const view = new Int32Array(sab);
// Atomics.store(view, 0, 123);
// // console.log(Atomics.load(view, 0));
// answer: 123


// 284. WeakRef
let target = { name: 'object' };
const weakRef = new WeakRef(target);
// console.log(weakRef.deref().name);
// answer: object


// 285. FinalizationRegistry
const registry = new FinalizationRegistry((heldValue) => {
    // console.log(`Cleanup: ${heldValue}`);
});
let obj = { id: 1 };
registry.register(obj, 'Object cleaned up');
// (cleanup happens when obj is garbage collected)


// ==========================================
// MORE ARRAY METHODS
// ==========================================

// 286. Array.prototype.some - advanced
const hasEven = [1, 3, 5, 8].some(n => n % 2 === 0);
// console.log(hasEven);
// answer: true


// 287. Array.prototype.every - advanced
const allPositive2 = [1, 2, 3, 4].every(n => n > 0);
// console.log(allPositive2);
// answer: true


// 288. Array.prototype.findIndex - advanced
const foundIndex = [10, 20, 30, 40].findIndex(n => n > 25);
// console.log(foundIndex);
// answer: 2


// 289. Array.prototype.fill - advanced
const filledArr = new Array(5).fill(0);
// console.log(filledArr.length);
// answer: 5


// 290. Array.prototype.reduceRight - advanced
const flattened2 = [[0, 1], [2, 3], [4, 5]].reduceRight((acc, curr) => acc.concat(curr), []);
// console.log(flattened2.length);
// answer: 6


// ==========================================
// MORE STRING OPERATIONS
// ==========================================

// 291. String.prototype.at - negative index
const strAt = "hello";
// console.log(strAt.at(-1));
// answer: o


// 292. String.prototype.trimStart (alias trimLeft)
const strTrimStart = "  hello";
// console.log(strTrimStart.trimStart());
// answer: hello


// 293. String.prototype.trimEnd (alias trimRight)
const strTrimEnd = "hello  ";
// console.log(strTrimEnd.trimEnd());
// answer: hello


// 294. String.prototype.concat - multiple
const concatenated = "Hello".concat(" ", "World", "!");
// console.log(concatenated);
// answer: Hello World!


// 295. String.prototype.includes - with position
const strIncludes = "hello world";
// console.log(strIncludes.includes("world", 6));
// answer: true


// ==========================================
// OBJECT ADVANCED OPERATIONS
// ==========================================

// 296. Object.groupBy with null prototype
const objNoProto = Object.create(null);
objNoProto.key = "value";
// console.log(objNoProto.key);
// answer: value


// 297. Object.hasOwn (modern alternative to hasOwnProperty)
const testObj = { prop: 'exists' };
// console.log(Object.hasOwn(testObj, 'prop'));
// answer: true


// 298. Object.defineProperties (multiple)
const objMultiProps = {};
Object.defineProperties(objMultiProps, {
    prop1: { value: 1, writable: true },
    prop2: { value: 2, writable: false }
});
// console.log(objMultiProps.prop1);
// answer: 1


// 299. Object.getOwnPropertySymbols
const sym = Symbol('test');
const objWithSym = { [sym]: 'value' };
// console.log(Object.getOwnPropertySymbols(objWithSym).length);
// answer: 1


// 300. Reflect.ownKeys (includes symbols)
const symKey = Symbol('key');
const objReflect = { a: 1, [symKey]: 2 };
// console.log(Reflect.ownKeys(objReflect).length);
// answer: 2


// ==========================================
// ARRAY & OBJECT CLONING - SHALLOW vs DEEP
// ==========================================

// 301. Shallow Copy - Array Spread Operator
const originalArray = [1, 2, 3, [4, 5]];
const shallowCopyArray = [...originalArray];
shallowCopyArray[0] = 10;
shallowCopyArray[3][0] = 40;
// console.log(originalArray);
// console.log(shallowCopyArray);
// answer: [ 1, 2, 3, [ 40, 5 ] ] - nested array modified
// answer: [ 10, 2, 3, [ 40, 5 ] ] - first element only changed in copy


// 302. Shallow Copy - Object Spread Operator
const originalObject = {
    name: 'John',
    age: 30,
    hobbies: ['reading', 'gaming'],
    address: { city: 'New York', country: 'USA' }
};
const shallowCopyObject = { ...originalObject };
shallowCopyObject.name = 'Jane';
shallowCopyObject.hobbies.push('cooking');
shallowCopyObject.address.city = 'Los Angeles';
// console.log(originalObject.name, shallowCopyObject.name);
// console.log(originalObject.hobbies, shallowCopyObject.hobbies);
// console.log(originalObject.address.city, shallowCopyObject.address.city);
// answer: John Jane - primitive changed only in copy
// answer: [ 'reading', 'gaming', 'cooking' ] [ 'reading', 'gaming', 'cooking' ] - arrays shared
// answer: Los Angeles Los Angeles - nested objects shared


// 303. Shallow Copy - Array.slice()
const originalArray2 = [1, 2, 3, [4, 5]];
const shallowCopyArray2 = originalArray2.slice();
shallowCopyArray2[3][0] = 99;
// console.log(originalArray2[3][0]);
// answer: 99 - nested array is shared reference


// 304. Shallow Copy - Object.assign()
const originalObject2 = { a: 1, b: { c: 2 } };
const shallowCopyObject2 = Object.assign({}, originalObject2);
shallowCopyObject2.b.c = 3;
// console.log(originalObject2.b.c);
// answer: 3 - nested object is shared reference


// 305. Deep Copy - JSON.stringify() & JSON.parse() (Limitations)
const originalObject3 = {
    name: 'Alice',
    age: 25,
    hobbies: ['reading', 'swimming'],
    birthDate: new Date('1998-01-01'),
    greet: function() { return `Hello, I'm ${this.name}`; },
    symbol: Symbol('test'),
    undefined: undefined
};
const deepCopyJSON = JSON.parse(JSON.stringify(originalObject3));
// console.log(deepCopyJSON);
// answer: { name: 'Alice', age: 25, hobbies: [ 'reading', 'swimming' ], birthDate: '1998-01-01T00:00:00.000Z' }
// Note: Functions, symbols, and undefined are lost. Dates become strings.


// 306. Deep Copy - structuredClone() (Modern, Recommended)
const originalObject4 = {
    name: 'Bob',
    age: 35,
    hobbies: ['hiking', 'photography'],
    address: { city: 'Seattle', coordinates: { lat: 47.6062, lng: -122.3321 } },
    birthDate: new Date('1988-05-15'),
    metadata: new Map([['created', '2024-01-01'], ['version', 1]])
};
const deepCopyStructured = structuredClone(originalObject4);
deepCopyStructured.hobbies.push('gardening');
deepCopyStructured.address.coordinates.lat = 40.7128;
deepCopyStructured.metadata.set('updated', '2024-12-01');
// console.log(originalObject4.hobbies.length);
// console.log(originalObject4.address.coordinates.lat);
// console.log(originalObject4.metadata.has('updated'));
// answer: 2 - original hobbies unchanged
// answer: 47.6062 - original coordinates unchanged
// answer: false - original metadata unchanged


// 307. Deep Copy - Custom Recursive Function
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof Array) return obj.map(item => deepClone(item));
    if (obj instanceof Map) {
        const clonedMap = new Map();
        for (let [key, value] of obj) {
            clonedMap.set(deepClone(key), deepClone(value));
        }
        return clonedMap;
    }
    if (obj instanceof Set) {
        const clonedSet = new Set();
        for (let value of obj) {
            clonedSet.add(deepClone(value));
        }
        return clonedSet;
    }
    
    const clonedObj = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = deepClone(obj[key]);
        }
    }
    return clonedObj;
}

const originalObject5 = {
    name: 'Charlie',
    scores: [85, 92, 78],
    details: { grade: 'A', subjects: ['Math', 'Science'] },
    createdAt: new Date(),
    tags: new Set(['student', 'honor-roll'])
};
const customDeepCopy = deepClone(originalObject5);
customDeepCopy.scores.push(95);
customDeepCopy.details.subjects.push('History');
customDeepCopy.tags.add('graduated');
// console.log(originalObject5.scores.length);
// console.log(originalObject5.details.subjects.length);
// console.log(originalObject5.tags.has('graduated'));
// answer: 3 - original scores unchanged
// answer: 2 - original subjects unchanged
// answer: false - original tags unchanged


// 308. Shallow Copy - Array.from()
const originalArray3 = [1, 2, 3, [4, 5]];
const shallowCopyArray3 = Array.from(originalArray3);
shallowCopyArray3[3][0] = 100;
// console.log(originalArray3[3][0]);
// answer: 100 - nested array is shared reference


// 309. Shallow Copy - Array.concat()
const originalArray4 = [1, 2, 3, [4, 5]];
const shallowCopyArray4 = originalArray4.concat();
shallowCopyArray4[3][0] = 200;
// console.log(originalArray4[3][0]);
// answer: 200 - nested array is shared reference


// 310. Deep Copy - Lodash cloneDeep (conceptual example)
// const _ = require('lodash');
// const originalObject6 = { a: 1, b: { c: 2, d: [3, 4] } };
// const lodashDeepCopy = _.cloneDeep(originalObject6);
// lodashDeepCopy.b.d.push(5);
// console.log(originalObject6.b.d.length); // 2
// console.log(lodashDeepCopy.b.d.length); // 3


// 311. Shallow Copy - Object.create()
const originalObject7 = { name: 'David', age: 40 };
const shallowCopyObject7 = Object.create(originalObject7);
shallowCopyObject7.name = 'Eve';
// console.log(originalObject7.name, shallowCopyObject7.name);
// answer: David Eve - only affects the copy


// 312. Deep Copy - Handling Circular References
function deepCloneCircular(obj, visited = new WeakMap()) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (visited.has(obj)) return visited.get(obj);
    
    const clonedObj = Array.isArray(obj) ? [] : {};
    visited.set(obj, clonedObj);
    
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = deepCloneCircular(obj[key], visited);
        }
    }
    return clonedObj;
}

const circularObj = { name: 'Frank' };
circularObj.self = circularObj; // Circular reference
const clonedCircular = deepCloneCircular(circularObj);
// console.log(clonedCircular === clonedCircular.self);
// answer: true - circular reference preserved


// 313. Shallow Copy - Object.fromEntries() with Object.entries()
const originalObject8 = { x: 1, y: 2, z: { a: 3 } };
const shallowCopyObject8 = Object.fromEntries(Object.entries(originalObject8));
shallowCopyObject8.z.a = 4;
// console.log(originalObject8.z.a);
// answer: 4 - nested object is shared reference


// 314. Deep Copy - Using structuredClone with Transferable Objects
const originalObject9 = {
    data: new Uint8Array([1, 2, 3, 4, 5]),
    metadata: { size: 5, type: 'buffer' }
};
const deepCopyStructured2 = structuredClone(originalObject9);
deepCopyStructured2.data[0] = 99;
// console.log(originalObject9.data[0]);
// console.log(deepCopyStructured2.data[0]);
// answer: 1 - original unchanged
// answer: 99 - copy modified


// 315. Shallow Copy - Array destructuring
{const originalArray5 = [1, 2, 3, [4, 5]];
const [first, ...rest] = originalArray5;
const shallowCopyArray5 = [first, ...rest];
shallowCopyArray5[3][0] = 300;}
// console.log(originalArray5[3][0]);
// answer: 300 - nested array is shared reference


// 316. Deep Copy - Using MessageChannel (Async)
function deepCloneAsync(obj) {
    return new Promise((resolve) => {
        const { port1, port2 } = new MessageChannel();
        port2.onmessage = (ev) => resolve(ev.data);
        port1.postMessage(obj);
    });
}

const originalObject10 = { name: 'Grace', items: [1, 2, 3] };
deepCloneAsync(originalObject10).then(cloned => {
    cloned.items.push(4);
    // console.log(originalObject10.items.length);
    // answer: 3 - original unchanged
});


// 317. Shallow Copy - Object.getOwnPropertyDescriptors()
const originalObject11 = {
    name: 'Henry',
    get fullName() { return `Mr. ${this.name}`; },
    set age(value) { this._age = value; }
};
const descriptors = Object.getOwnPropertyDescriptors(originalObject11);
const shallowCopyObject11 = Object.create(Object.getPrototypeOf(originalObject11), descriptors);
// console.log(shallowCopyObject11.fullName);
// answer: Mr. Henry - getters/setters preserved


// 318. Deep Copy - Handling Functions (Custom Implementation)
function deepCloneWithFunctions(obj, visited = new WeakMap()) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (visited.has(obj)) return visited.get(obj);
    
    if (typeof obj === 'function') {
        // Functions cannot be truly cloned, return reference
        return obj;
    }
    
    const cloned = Array.isArray(obj) ? [] : {};
    visited.set(obj, cloned);
    
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloned[key] = deepCloneWithFunctions(obj[key], visited);
        }
    }
    return cloned;
}

const objectWithFunction = {
    name: 'Ivy',
    greet: function() { return `Hello, ${this.name}`; },
    data: { value: 42 }
};
const clonedWithFunction = deepCloneWithFunctions(objectWithFunction);
// console.log(clonedWithFunction.greet === objectWithFunction.greet);
// answer: true - function reference shared


// 319. Shallow Copy - Array.prototype.with() (ES2023)
const originalArray6 = [1, 2, 3, [4, 5]];
const shallowCopyArray6 = originalArray6.with(0, 10);
shallowCopyArray6[3][0] = 400;
// console.log(originalArray6[3][0]);
// answer: 400 - nested array is shared reference


// 320. Performance Comparison - Shallow vs Deep Copy
const largeObject = {
    data: Array.from({length: 1000}, (_, i) => ({ id: i, value: Math.random() })),
    metadata: { created: new Date(), version: '1.0' }
};

// Shallow copy timing
const shallowStart = performance.now();
const shallowCopy = { ...largeObject };
const shallowEnd = performance.now();

// Deep copy timing (structuredClone)
const deepStart = performance.now();
const deepCopy = structuredClone(largeObject);
const deepEnd = performance.now();

// console.log(`Shallow copy: ${(shallowEnd - shallowStart).toFixed(4)}ms`);
// console.log(`Deep copy: ${(deepEnd - deepStart).toFixed(4)}ms`);
// Note: Shallow copy is significantly faster than deep copy


// ==========================================
// CLONING SUMMARY & BEST PRACTICES
// ==========================================

/*
SHALLOW COPY METHODS:
- Spread operator: [...array], {...object}
- Object.assign({}, object)
- Array.slice(), Array.concat()
- Array.from(array)
- Object.fromEntries(Object.entries(object))

DEEP COPY METHODS:
- structuredClone() - Modern, handles most cases
- JSON.parse(JSON.stringify()) - Simple but has limitations
- Custom recursive functions - Full control
- Third-party libraries (Lodash cloneDeep)

WHEN TO USE SHALLOW COPY:
- Simple objects/arrays with primitive values
- Performance is critical
- You want to share references to nested objects

WHEN TO USE DEEP COPY:
- Complex nested objects/arrays
- You need complete isolation
- Work effects
ing with immutable data patterns
- Preventing unintended side
LIMITATIONS TO CONSIDER:
- JSON methods: No functions, symbols, undefined, or dates
- structuredClone(): No functions or DOM nodes
- Custom functions: Need to handle circular references
- Performance: Deep copy is slower than shallow copy
*/



