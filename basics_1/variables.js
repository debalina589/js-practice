const accountId = 2958482;
let accountEmail = "debalina@gmail.com";
var accountPassword = "12344";
accountCity = "Bengal";
let accountState;


// accountId = 589 // not allowed

accountEmail = "pritam@gmail.com";
accountPassword = "36254";
accountCity = "Bengaluru";

console.log(accountId);
/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountEmail, accountPassword, accountCity, accountState]);
