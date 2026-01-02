const name = "Krishna"
const othName = 108

//console.log(name + othName + " Value");
// console.log(`Hello my name is ${name} and I have Others ${othName} name`);

 const bookName = new String('mahabharat')
// console.log(bookName[10]);
// console.log(bookName.__proto__);
// console.log(bookName.length);
// console.log(bookName.lastIndexOf('r'));
// console.log(bookName.toUpperCase());
// console.log(bookName.toLocaleUpperCase());
// console.log(bookName.toLocaleLowerCase());
// console.log(bookName.charAt(2));
// console.log(bookName.indexOf('b'));

const newString = bookName.substring(0, 6)
//console.log(newString);

const anotherString = bookName.slice(-8, 4)
//console.log(anotherString);

const newString1 = " Krishna "


const url = "https://debalina%20jana"
//console.log(url.replace('%20', '-'));
//console.log(url.includes('pri'));

const score = 400
// console.log(score);
// console.log(typeof score);
// console.log(score.toString());


const balance = new Number(1000)
//console.log(balance);
//console.log(typeof balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(3));

const otherNumber = 3.1836
//console.log(otherNumber.toPrecision(4));

const oth1 = 27.2652
//console.log(oth1.toPrecision(3));

const oth2 = 127.22
//console.log(oth2.toPrecision(4));

const hundreads= 1000000
//console.log(hundreads.toLocaleString());
//console.log(hundreads.toLocaleString('en-IN'));

// **************** Maths ***************

// console.log(Math);
// console.log(Math.abs(5));
// console.log(Math.abs(-5));
// console.log(Math.round(5.3));
// console.log(Math.round(5.6));
// console.log(Math.ceil(5.2));  // 6
// console.log(Math.floor(5.8));  // 5
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));
console.log(Math.random());
console.log((Math.random()*10) +1);
console.log(Math.floor(Math.random()*10) +1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) + min);





