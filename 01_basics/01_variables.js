const accountId = 1122
let accountEmail = "saba@gmail.com"
var accountPassword = "12345"
accountCity = "Bagh" //better not to use this
let accountState; // undefined 
// accountId = 11 // not allowed
// var is problematic for block scope & functional scope {}. 
accountEmail = "sana@gmail.com"
accountPassword = "1945"
accountCity = "Kahutta"

console.log("accountId");

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])