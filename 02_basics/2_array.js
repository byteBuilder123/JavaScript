const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array); //spreads


console.log(Array.isArray("Saba")) // false
console.log(Array.from("Saba")) // converts into array
console.log(Array.from({name: "Saba"})) // [] have to mention that make array from keys or values

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

//isArray true or false
console.log(Array.isArray([1, 2, 3])); // true (it's an array)
console.log(Array.isArray('hello'));   // false (it's a string)
console.log(Array.isArray({ a: 1 }));  // false (it's an object)
console.log(Array.isArray(null));      // false

//fromArray  Creates a new array from an array-like or iterable object
const str = 'hello';
const arr = Array.from(str);
console.log(arr); // ['h', 'e', 'l', 'l', 'o']

const set = new Set([1, 2, 3]);
const arr2 = Array.from(set);
console.log(arr); // [1, 2, 3]

const arr3 = Array.from([1, 2, 3], x => x * 2); //mapFn
console.log(arr); // [2, 4, 6]

//ofArray Creates a new array from a variable number of arguments, regardless of their types.
const arr4 = Array.of(1, 2, 3);
console.log(arr); // [1, 2, 3]
