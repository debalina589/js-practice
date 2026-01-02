const myNum = [1, 2, 3]

// const myTotal = myNum.reduce(function (acc, currVal) {
//     console.log(`acc : ${acc} and currVal : ${currVal}`);
    
//     return acc + currVal
// }, 0)

const myTotal = myNum.reduce( (acc, curr) => acc + curr, 0)


//console.log(myTotal);

const coursePurchase = [
    {
        itemName: "js course",
        price : 1999
    },
    {
        itemName: "py course",
        price : 999
    },
    {
        itemName: "java course",
        price : 2999
    },
    {
        itemName: "c++ course",
        price : 99
    }
]

const priceTo = coursePurchase.reduce( (acc, item) => acc + item.price,  0)
console.log(priceTo);

