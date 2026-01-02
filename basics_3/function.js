function sayMyName (){
    console.log("R");
    console.log("A");
    console.log("D");
    console.log("H");
    console.log("A");
    
}
// sayMyName()   * function call { scope of function}

// function addTwoNumbers (num1, num2){
//     console.log(num1 + num2);
    
// }
// addTwoNumbers(2, 4)

function mulTwoNum(num1, num2) {
    // let result = num1 * num2
    // console.log("Multiplication of Two Numbers :");
    // return result
    return num1 * num2
}
const result = mulTwoNum(19, 3)
//console.log("19 * 3 = ", result);

function loginUserMessage (username){
    //if (username === undefined) 
    if (!username){
        console.log("Please enter a User Name ");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("Radha")) // Radha ...
//console.log(loginUserMessage(" "))  //    ....
//console.log(loginUserMessage()) // undefined ...

function loginUser (userName = "Krishna"){
    //if (username === undefined) 
    if (!userName){
        console.log("Please enter a User Name "); // in this case never used this block
        return
    }
    return `${userName} just logged in`
}
//console.log(loginUser());

function calculateCartPrice(...num1) {
    return num1
}
//console.log(calculateCartPrice(500, 300, 1000,200));

function calculatePrice(val1, val2, ...num2) {
    return num2
}
//console.log(calculatePrice(200, 400, 500, 1000, 300)); // val1 = 200, val2 = 400, ...num2 = [500, 1000, 300]

// ******* Type1 for passing obj in a function
const Obj1 = {
    userName: "Radha",
    price : 169
}

function objectHandler(anyobj) {
    console.log(`Username is ${anyobj.userName} and buy a book which price is ${anyobj.price}`);
    
}
//objectHandler(Obj1)

// ************ type2

function handleObject(anyobj) {
    console.log(`Username is ${anyobj.userName} and her age is ${anyobj.age}`);
}
// //handleObject({
//     userName: "Radha Rani",
//     age: 16
// })

// ********Passing Array in function
const myArray = [200, 300, 599, 1999]

function getSecondValue(getArray) {
    return getArray[1]
}
console.log(getSecondValue(myArray));

function getValue(getArray) {
    return getArray[3]
}
console.log(getValue([599, 699,799, 1999]));
