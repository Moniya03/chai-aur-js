let heros = ["thor","hulk","captain america"]
let heroPower = {
    thor:"hammer",
    hulk:"strength",
    captain america:"shield",
    getPower:function(){
        console.log(`Power of thor: ${this.thor}`);
        
    }
}
Object.prototype.bons = function(){
    console.log("Phasmatos spirum")
}
Array.prototype.hey = function(){
    console.log("hello");
}
heros.bons()
heros.hey()
// heroPower.hey()

//inheritance
const user = {
    name:"caro"
}
const Teacher = {
    makeVideo: true
}
const Support = {
    isAvailable:true
}
const interview = {
    makeAssign: 'Coding',
    fullTime: true,
    __proto__:Support,
}

Teacher.__proto__ = user

// modern syntax
Object.setPrototypeOf(Support,Teacher)

let username = "forbes   "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is ${this.trim().length}`);
}
username.trueLength()
"bonss  ".trueLength()