function createUser(username,score){
    this.username = username
    this.score = score
}
createUser.prototype.increament = function(){
    this.score++
}
createUser.prototype.print = function(){
    console.log(`price is${this.score}`);
    
}
const chai = new createUser("chai",20)
const tea  = new createUser("tea",200)

chai.print() 