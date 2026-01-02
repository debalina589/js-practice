// Dates

let myDate = new Date()
//console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

//let myCreatedDate = new Date(2025, 6, 7)
//let myCreatedDate = new Date(2025, 6, 7, 3, 4)
let myCreatedDate = new Date("12-01-2026")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));
let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMonth());
console.log(newDate.getTime());

newDate.toLocaleString('default', {
    weekday: "long",
    dayPeriod: "short"
})






 