class user{
    constructor(username){
        this.username = username
    }
    log(){
        console.log(`${this.username}`);
    }
    static createId(){
        return `123`
    }
}
const hi = new user("hi")
console.log(hi.createId());

const teacher extends user{
    constructor(username,email){
        super(username)
        this.email = email
    }
}
const phone = new teacher("phone","phone@gmail.com")
console.log(phone.createId());
