// Encapsulation
class BankAcc{
    #balance = 0;
    deposit(amount){
        this.#balance += amount;
        return this.#balance;
    }
    getBalance(){
        return `$ ${this.#balance}`
    }
}
let account = new BankAcc()
console.log(account.getBalance())

//Abstraction
class CoffeeMachine{
    start(){
        return `Machine Started`
    }
    brewCoffee(){
        return `Brewing Coffee`
    }
    pressStart(){
        let msg1 = this.start()
        let msg2 = this.brewCoffee()
        return `${msg1}+${msg2}`
    }
}
let machine =  new CoffeeMachine();
console.log(machine.start())
console.log(machine.brewCoffee())
console.log(machine.pressStart())

//Polymorphism
class Bird{
    fly(){
        return `Flying..`
    }
}
class Penguins extends Bird{
    fly(){
        return `Penguins cant fly`
    }
}
let bird = new Bird()
let penguin = new Penguins()
console.log(bird.fly())
console.log(penguin.fly())

// static method
class Calculator{
    static add(a,b){
        return a+b
    }
}
console.log(Calculator.add(4,5))

// getters setters
class Employee{
    #salary
    constructor(name,salary){
        if(salary<0){
            throw new Error("Salary cannot be in negative")
        }
        this.name = name
        this.#salary = salary
    } 
    get salary(){
        return `You are not allowed to see salary`
    }
    set salary(value){
        if(value<0){
            return `Invalid salary`
        }else{
        this.salary = salary
        }
    }
}
let emp = new Employee("Alice",5000)
console.log(emp._salary)
