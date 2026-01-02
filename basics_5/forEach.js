
const programming = ["js", "rb", "py", "java"]

// programming.forEach( function (value){
//     console.log(value);
    
// })

// programming.forEach( (item) => {
//     console.log(item);
    
// })

// function printMe(item){
//     console.log(item);
    
// }
// programming.forEach(printMe)

// programming.forEach((item, index, arr) => {
//     console.log(item, index, arr);
    
// })

const myCoding = [
    {
        langName: "javascript",
        langFilename: "js"
    },
    {
        langName: "java",
        langFilename: "java"
    },
    {
        langName: "python",
        langFilename: "py"
    }
]
myCoding.forEach( (item) => {
    console.log(item.langName);
    
})