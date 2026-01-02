const user = new Object()  // singletone object

user.id = "fi12"
user.name = "Ram"
user.age = 22
user.isLoggedIn = false
// console.log(user);
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));


// console.log(user.hasOwnProperty('isLoggedIn'));
// console.log(user.hasOwnProperty('isLogged'));


const User = {    // non-singletone obj
        email: "deba@123gmail.com",
        age: 22,
        fullName: {
        userfullName: {
            firstName: "Debalina",
            lastName: "Jana"
        }
} 
}
//console.log(User.fullName.userfullName.firstName);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}
const obj4 = {7: "g", 8: "h"}

//const obj5 = Object.assign({}, obj1, obj2, obj3, obj4)

// Best Option
const obj5 = {...obj1, ...obj2, ...obj4}
//console.log(obj5);

const admin = [
    {
        id : 1,
        name : "abc"
    },
    {
        id : 1,
        name : "abc"
    },
    {
        id : 1,
        name : "abc"
    },
    {
        id : 1,
        name : "abc"
    },

]
//console.log(admin[1].name)

const course = {    // non-singletone obj
        email: "deba@123gmail.com",
        age: 22,
        userName: "Debalina"
}
console.log(course.age);

const {email} = course
console.log(email);

const {userName: name} = course
console.log(name);

// {
//     name : "deba",
//     age: 33,
//     roll: "ajs"
    
// }

[
    {},
    {},
    {}
]