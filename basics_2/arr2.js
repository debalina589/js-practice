const heros = ["Krishna", "Siva", "Arjuna"]
const ab = ["chakra", "trisul", "gundiv"]

//heros.push(ab)
//console.log(heros);

// const allHeros = heros.concat(ab)
// console.log(allHeros);

const allHeros = [...heros, ...ab]
//console.log(allHeros);

const another_arr  = [ 1, 2, 3, [4], [5, 6, 7], 8, 9, [10, [11, [12]]]]

const real_another_arr = another_arr.flat(Infinity)
//console.log(real_another_arr);
 //console.log(Array.isArray("Krishna"));  // INTERESTING
 console.log(Array.from("Krishna"));
 //console.log(Array.from({name: "Krishna"}));
 
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));


