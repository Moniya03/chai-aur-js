class user{
    constructor(username){
        this.username = username
    }
    log(){
        console.log(`${this.username}`);
        
    }
}
class teacher extends user{
    constructor(username,email){
        super(username);
        this.email = email;
    }
    add(){
        console.log("New course is added by ${this.username");
    }
}
const hello = new teacher("chai","chai@gmail.com")
console.log(hello instanceof teacher);
console.log(teacher instanceof user);

