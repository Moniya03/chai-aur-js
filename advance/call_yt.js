function setUsername(username){
    this.username = username
}
// call - helps to hold reference,pass current execution context to another function
function createUser(username,email,password){
    setUsername.call(this,username)
    this.email = email
    this.password = password
}
const hi = new createUser("hii","hi@gmail.com","12")
console.log(hi); 
