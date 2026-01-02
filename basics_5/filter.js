const programming = ["js", "rb", "py", "java"]

// const values = programming.forEach( (item) => {
//     console.log(item);
//     //return item
// })
// console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8]

//const newNums = myNums.filter( (num) => num > 4)
// const newNums = myNums.filter( (num) => {
//   return  num > 4
// })
// console.log(newNums);

// const newNums = []
 
// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);


const books = [
    { title: "Book 1", genre: 'Fiction', publish: 1981, edition: 2004},
    { title: "Book 2", genre: 'History', publish: 1947, edition: 2024},
    { title: "Book 3", genre: 'Science', publish: 2000, edition: 2025},
    { title: "Book 4", genre: 'Fiction', publish: 1931, edition: 1950},
    { title: "Book 5", genre: 'science', publish: 1981, edition: 2000},
    { title: "Book 6", genre: 'Math', publish: 2000, edition: 2024},
    { title: "Book 7", genre: 'Math', publish: 1951, edition: 1989},
    { title: "Book 8", genre: 'Fiction', publish: 1911, edition: 2025}
];
let userBooks = books.filter( (bk) => bk.genre === 'Fiction')
userBooks = books.filter((bk) => {return bk.edition >= 2000 && bk.genre === 'Fiction'})
console.log(userBooks);


