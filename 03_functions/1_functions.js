
function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("B");
    console.log("A");
}
// sayMyName()


function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2 //easy method
}
const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);


function loginUserMessage(username = "fatima"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("saba"))


function calculateCartPrice(val1, val2, ...num1){      // ... rest operator or spread operator
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "saba",
    prices: 300
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)

handleObject({
    username: "saba",
    price: 899
})
const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));