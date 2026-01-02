// # Primitive 
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100  // number
const scoreValue = 100.3 // number

const isLoggedIn = false // boolean
const outsideTemp = null  // object
let userEmail;    // undefined

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(typeof score);
// console.log(typeof scoreValue);
// console.log(typeof isLoggedIn);
// console.log(typeof outsideTemp);
// console.log(typeof id);  // symbol

// console.log(typeof userEmail);
//console.log(id === anotherId);

const bigNumber = 6239569564983564786946869687746328746760486046n

// # Reference (Non Primitive)

// Array, Objects, Functions

const heroes = ["Krishna", "Arjuna", "Karna", "Visma"]
let myObj = {
    name: "Radha",
    age: 21,
}
const myFunction = function(){
    // console.log("Hello Bhagwan !!!");
    
}
//  console.log(typeof bigNumber);  // bigint
//  console.log(typeof heroes); // object
//  console.log(typeof myObj);  // object
//  console.log(typeof myFunction);  // function
 
 
// JavaScript is a "Dynamically typed language". This means that the type of a variable is determined at runtime based on the value it holds, rather than being explicitly declared at compile time. 



// ++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) => just copy the data and then can change the copy value, Heap (Non-Primitive) => It can change the original value or gives the reference of a value

let myYoutubeName = "creativeNest"
let anotherName = myYoutubeName
anotherName = "myKrishna"

console.log(myYoutubeName); // "creativeNest"
console.log(anotherName);   // "myKrishna"

let user1 = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let user2 = user1

user2.email = "deba@gmail.com"

console.log(user1.email); // "deba@gmail.com"
console.log(user1.upi);  // "user@ybl"
console.log(user2.email);  // "deba@gmail.com"
console.log(user2.upi);  // "user@ybl"
