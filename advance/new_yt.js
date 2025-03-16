// when we use new keyword - 
// 1)an empty object is created called instance(object creation)
//2)constructor function is called 
//3)new obj is created
function user(username,loginCount,isLoggedIn){
    this.username = username;
    this.isLoggedIn = isLoggedIn;
    this.loginCount = loginCount;
}
//values are being overrided - to prevent this new keyword is used 

const one = new user("bons",12,false)
const two = new user("vamp",32,true)
console.log();

