
const arr = [1, 2, 3, 4, 5, 6]

for (const num of arr) {
   // console.log(num);
}

const greetings = "Hello World !"
for (const greet of greetings) {
   // console.log(`Each char is ${greet}`);
    
}

// Map

const map = new Map() // print only unique value
map.set('IN', "India")
map.set('BAN', "Bengal")
map.set('Fr', "France")
map.set('IN', "India")
//console.log(map);
for (const [key, value] of map) {
    //console.log(key, ':-', value);
    
}

// const myObj = {
//     'game1' : 'ab',
//     'game2' : 'abb',
// }
// for (const [key, value] of myObj) { // not iteratable
//    // console.log(key, ':-', value);
// }