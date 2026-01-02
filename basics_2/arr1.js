// Array

const myArr = ["a", "b", "c", "d", "e", "f" ]
const myHeroes = ["Krishna", "Arjun"]
const myArr2 = new Array(1,2,3,2)
// console.log(myArr[1]);
// console.log(myArr2[3]);
// console.log(myHeroes[2]);

// Array methods
// myArr.push(5)
// console.log(myArr);
// myArr.pop()

// myArr.unshift(7)
// myArr.shift()
// console.log(myArr.includes(8));  // false
// console.log(myArr.indexOf(8));   // -1
// console.log(myArr.indexOf(0));   // 0   

const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof myArr); // object
// console.log(newArr);
// console.log(typeof newArr); // string

// slice, splice
// console.log("A ", myArr);
// const myn1 = myArr.slice(1, 3)
// console.log(myn1);
// console.log("B ", myArr);

console.log("C ", myArr);
const myn2 = myArr.splice(1, 3)
console.log(myn2);
console.log("D ", myArr);






