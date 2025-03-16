function Person(name,age){
    this.name = name
    this.age = age
}
function Car(make,model){
    this.make = make
    this.model = model
}
let myCar = new Car("Toyoto","Camry")
console.log(myCar)
function Tea(type){
    this.type = type
    this.describe = function(){
        return `this is a cup of ${this.type}`
    }
}
let lemon = new Tea("lemon Tea")
console.log(lemon)
console.log(lemon.describe())

function animal(species){
    this.species = species
}
animal.prototype.sound = function(){
    return `${this.species} makes a sound`
}
let dog = new animal("Dog")
console.log(dog.sound())

//error detection
function Drink(name){
    if(!new.target){
        throw new Error("No new keyword")
    }
    this.name = name
}
let Soda = new Drink("Soda")
let Coke =  Drink("Coke") // raises error