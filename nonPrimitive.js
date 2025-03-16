let object = {}
console.log(object)
console.log(typeof object)

let userName = {
    fName : "chan",
    lName : "chan"
}
userName.fName = "Tan"
userName.isLoggedIn = true
// console.log(fName) cannot get fName like this
console.log(userName.fName)
console.log(userName["fName"])

let today = new Date()
console.log(today)
console.log(today.getDay())
console.log(today.getDate())

// Array
let user = ["java","script"]
console.log(user[0])

let value = true
let value2 = false
console.log(1+value)
console.log(1+value2)

let isValue = "2"
console.log(Number(isValue))
console.log(typeof Number(isValue))

let isValue2 = "2abcd"
console.log(Number(isValue2)) //NaN
console.log(typeof Number((isValue2))) //number

console.log(Number(null)) //0
console.log(Number(undefined)) //NaN

