const accountId = 12356789
let accountEmail = "zohaib@gmail.com"
var accountPassword = "12345"
accountCity = "Hyderabad"
let accountState;

// accountId = 2 // not allowed


accountEmail = "akhtar@gmail.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])