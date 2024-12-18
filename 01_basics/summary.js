//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
// const bigNumber = 3456543576654356754n

// Reference (Non primitive)
// Array, Objects, Functions

const heros = ["tipusultan", "Shah zafar"];
let myObj = {
    name: "saba",
    age: 22,
}

const myFunction = function(){
    console.log("Hello Saba");
}

console.log(typeof anotherId); 

// javascript is dynamic language 
// https://262.ecma-international.org/5.1/#sec-11.4.3

// Type of val	Result
// Undefined	"undefined"
// Null	        "object"
// Boolean	    "boolean"
// Number	    "number"
// String	    "string"
// Object        "object"


// +++++++++++++++++++++++++++++++++++++++++++++
// Stack (primitive)   copy
//  Heap (non primitive) reference

let myYoutubename = "fatima"
anothername = "saba"
  console.log(myYoutubename)
  console.log(anotherename)