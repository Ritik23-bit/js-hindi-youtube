/* undefined

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail = undefined */

// SYMBOL

const id = Symbol("123")
const anotherId = Symbol("123")
// console.log(id === anotherId);

const bigNumber = 234967537945674364n


const heros = ["Shaktiman", "Nagraj", "Doga"]
let myObj = { 
    name: "ritik",
    age: 23,
}


const myFunc = function() {
    console.log("Hello World");
}

console.log(typeof Symbol);



// ++++++++++++++++++++++++++++++++ MEMORY ++++++++++++++++++++++++++++++++

// stack - primitive data types
// heap - non-primitive data types

let myYoutubename = "ritik.com"
let anothername = myYoutubename
anothername = "ritik123.com"

console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "user1@google.com"

console.log(userOne.email);
console.log(userOne.email);