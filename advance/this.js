const person = {
    name : "Bonnie",
    greet(){
        console.log(`${this.name}`)
    }
}
person.greet()
let greetFun = person.greet()
greetFun()
const bound = person.greet.bind({name:"bons"})
bound()
//bind,call,apply
