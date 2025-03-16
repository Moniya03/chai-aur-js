//Number
let balance = 20
let anoBalance = new Number(120)
console.log(balance)
console.log(typeof balance)
console.log(typeof anoBalance)
console.log(anoBalance)
console.log(anoBalance.valueOf())

//boolean
let isLoggedIn = true
let isNotLoggedIn = new Boolean(true) //not recommended

//undefined and null
let firstName
console.log(firstName) // undefined
let middleName = null
console.log(middleName)
// console.log(lastName) //not defined error

//String
let greeting = "Good Morning"
let  chan = "Muriel"
let oldGreet = greeting + "Regina Phalagne"
console.log(oldGreet)
let newGreet = `Good Morning ${chan}`
console.log(newGreet)
let calc = `value of 2+2 is ${2+2}`
console.log(calc)

//Symbol guarantee to provide unique values. It is a built in object whose constructor returns a symbol. 
// We dont use new keyword while declaring a symbol because it is used to create instance of a constructor or class

let symbol1 = Symbol("chan chan")
let symbol2 = Symbol("chan chan")
console.log(symbol1 == symbol2)


