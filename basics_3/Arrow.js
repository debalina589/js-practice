const user = {
    username : "Krishna",
    price: 399,
    welcomeMessage: function(){
        console.log(`You Pay ${this.price} , ${this.username} , Welcome to Website`); 
        console.log(this);
    
    }
    
}
// //user.welcomeMessage()
// user.username = "Sam"
//  user.welcomeMessage()
// console.log(this);

// function tea(){
//     let username = "radha"
//     console.log(this.username);
    
// }
// tea() // undefined

// const chai = function(){
//     let username = "Deba"
//     console.log(this.username);
    
// }
// chai()  // undefined

const chai = () => {
    let username = "Radhika"
    console.log(this);
    
    console.log(this.username);
    
}
chai()

// Basic arrow function
const addTwo = (num1, num2) => { // <= for this {} should write return keyword
    return num1 + num2
}
console.log(addTwo(7, 8))

// Implicit Arrow Function / one line 

//const addOne = (num1, num2) => num1 + num2 
const addOne = (num1, num2) => (num1 + num2) // don't need to write return keyword for ()

//console.log(addOne(5, 6));

const forObject = () => ({username: "Radha"})

//console.log(forObject());

// const myArray = [2, 5, 3, 6 , 7]
// myArray.forEach()
