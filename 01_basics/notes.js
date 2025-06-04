// Primitive Types (Call by Value)
// Changes are made on a copy, not the original value

let name = "Mon";
let anotherName = name;
anotherName = "Mona";
// 'name' remains unchanged

// Types: string, number, boolean, null, undefined, symbol, bigint

// Symbol example — always unique
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId); // false

// BigInt example
const bigNumber = 78286484n;


// Reference Types (Non-Primitive)
// Arrays, Objects, Functions — passed by reference

const heros = ["shaktiman", "doga"];

let myObj = {
    name: "mon",
    age: 22
};

const myFunction = function () {
    console.log("hello");
};


// Dynamically typed — variables can change type at runtime
// Stack (Primitive), Heap (Non-Primitive)

let myname = "moniya";
let yname = myname;
yname = "chai";
console.log(myname); // moniya
console.log(yname);  // chai

/*
Stack: yname is a copy of myname, original remains unchanged
*/

let userOne = {
    email: "user@google.com",
    upi: "user@upi"
};

let userTwo = userOne;
userTwo.email = "moniya@google.com";

console.log(userOne.email); // moniya@google.com
console.log(userTwo.email); // moniya@google.com

/*
Heap: userTwo is a reference to userOne, both point to the same object
*/
