// function chai(){
//     console.log(`DB CONNECTED`);
    
// }
// chai()

(function chai(){
    console.log(`DB CONNECTED`);
    
})();  // this type function call occured for immediate doing any task.  Some time global declaration makes pollution or problem so for remove this we can use iife(Immediately Invoked Function Expression)
// if I don't put this " ; " after finished a function or IIFE Function then it will be give me a error

( () => {
    console.log(`DB CONNECTED 2`);
    
})();
// name IIFE
( function  ourCode(){
    console.log(`DB CONNECTED 3`);
    
})();
// how to pass parameter and argument in IIFE Function ( simple iife)
( (age) => {
    console.log(`DB CONNECTED 3 ${age}`);
    
})(50);
( (uname) => {
    console.log(`DB CONNECTED 3 ${uname}`);
    
})("Radha")