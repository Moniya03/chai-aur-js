// prototypal chain
function animal(type){
    this.type = type
}
animal.prototype.speak = function(){
    return `${this.type} makes a sound`
}
// prototypal chaining
Array.prototype.mon = function(){
    return `${this}`
}
let arr = [1,2,3]
console.log(arr.mon())
// let new = [1,2,3,4,5]
// console.log(arr.mon())
 class vehicle{
    constructor(make,model){
        this.make = make
        this.model = model
    }
    start(){
        return `${this.model} belongs to ${this.make}`
    }
 }
    class Car extends vehicle{
        drive(){
            `${this.make}:Inheritance`
        }
    }
let car = new Car("Toyota","Corolla")
console.log(car.start())
console.log(car.drive())


