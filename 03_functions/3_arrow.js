// this in browser refers to window object (browser k andr global object ha window)
// this in node env referes to emptty obj

const user = {
    username: "saba",
    price: 889,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "saba"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "saba"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "saba"
    console.log(this); //undefined
}
// chai()


// in curely braces you have to write return but in paranthesis no need to write
// explicit & implicit 


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 
// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "saba"})  //object return when wrap in paranthesis

console.log(addTwo(3, 4))
// const myArray = [2, 5, 3, 7, 8]
// myArray.forEach()