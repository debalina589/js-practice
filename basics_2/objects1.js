// Singleton

// Object.create

// Object Literals
const mySym = Symbol("key1")

const jsUser = {
    name : "Radha",
    "full name" : "Radha Rani",
    [mySym] : "mySym1",
    age : 22,
    location  : "Tamluk",
    email : "radha@Krishna.com",
    isLoggedIn : false,
    lastLoggedInDays : ["Sunday", "Tuesday"]
}
// console.log(jsUser.email);
// console.log(jsUser["email"]);

// console.log(jsUser["full name"]);
// console.log(jsUser.lastLoggedInDays);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);
// jsUser.age = 23
// Object.freeze(jsUser)
// jsUser.age = 24
 //console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello thakur Ji");
    
}
jsUser.greetings = function(){
    console.log(`Hello thakur Ji, ${this.name} is your Param Sokhi`);
    
}
console.log(jsUser.greeting());
console.log(jsUser.greetings());


//console.log(jsUser);




