// for

for (let i = 0; i <= 10; i++) {
    const element = i;
   // console.log(element);
    
}
for (let j = 0; j <= 10; j++) {
    const element = j;
    if (element == 5) {
      //  console.log(`${element} is Best Number`);
        
    }
   // console.log(element);
    
}

for (let i = 0; i <= 10; i++) {
    //console.log(`Outer loop value : ${i}`);
    for (let j = 0; j <= 5; j++) {
      //  console.log(`Inner Loop value : ${j} and inner loop ${i}`);
    }
}
// Multiplication table
for (let i = 1; i <= 10; i++) {
   //console.log(`Multiplication Table of : ${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(`${i}  *  ${j} = ${i*j}`);
        
    }
}

// loop for array
let myArray = ["Radha", "Krishna", "Lakshmi", "Narayana", "Parvati", "Siva"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
   // console.log(element);
    
}

// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
      //  console.log(`Detected 5`);
        break // stop loop to further execute
    }
   // console.log(`Value of i is ${index}`);
}
    // o/p Value of i is 1
// Value of i is 2
// Value of i is 3
// Value of i is 4
// Detected 5
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
       // console.log(`Detected 5`); // ignore this value
        continue
    }
   // console.log(`Value of i is ${index}`);
}
