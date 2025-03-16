const user = {
    username: "bons",
    loginCount : true,

    getDetails:function(){
        console.log("Got user details from database");
        console.log(`username: ${this.username}`);
        console.log(this);
        
        
    }
}
console.log(user.username);
console.log(user.getDetails())

