console.log("2" > 1);
console.log("02" > 1);



// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true
// console.log(null <= 0); // true

// the reason is that an equality check "==" and comparison ">", "<", ">=", "<=" work differently.
// comparisons convert null to a number, treating it as 0. That's why "null >= 0" is "true" and "null > 0" is "false"

// console.log(undefined == 0);
// console.log(undefined >= 0);
// console.log(undefined <= 0);
// console.log(undefined > 0);
// console.log(undefined < 0);    // undefined can not be changed in a value as null

// console.log("2" == 2); // true
// console.log(2 == "2"); // true

// // ===
// console.log("2" === 2);  // false
// console.log(2 === "2");  // false
