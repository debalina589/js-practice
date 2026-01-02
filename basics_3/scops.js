// let a = 10
// const b = 20
// var c = 30

// global scope
// if (true) { // block scope
//     let a = 10
//     const b = 20
//     var c = 30
// }
// //console.log(a);
// //console.log(b);
// console.log(c);
// let a = 100
// const b = 200
// if (true) {
//     let a = 10
//     const b = 20
//     console.log("Innere: ",a);
//     console.log("Innere: ",b);
    
// }
// console.log("Outer: ",a);
// console.log("Outer: ",b);

function one() {
    const username = "RadhaRani"
    function two() {
        const website = "youtube"
        
        console.log(website);
    }
    
   // two()
    console.log(username);
}

//one()

if (true) {
    const username = "Radha"
    if (username === "Radha") {
        const website = " youtube"
        //console.log(username + website);
    }
    //console.log(website); cannot execute out of inner scope
}
//console.log(username);   out of if scope

// ++++++++ Hoisting ++++++++++
console.log(addone(5));

function addone(num) {
    return num + 1
}
// addone(5)
 // cannot execute 
 
//console.log(addTwo(6)); casnnot access before initialization

const addTwo = function(num) {
    return num + 2
}
//addTwo(6)


