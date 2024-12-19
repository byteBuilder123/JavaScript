// object literals
const mySym = Symbol("key1") //symbol declare
const JsUser = {
    name: "Saba",
    "full name": "Saba Fatima",
    [mySym]: "mykey1", // symbol must be used in square bracket
    age: 25,
    location: "Haveli",
    email: "saba@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "saba@linux.com"
//Object.freeze(JsUser)
JsUser.email = "saba@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this["full name"]}`); //string interpolation this is used to referance current object
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());