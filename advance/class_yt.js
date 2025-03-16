class User{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encrypt(){
        return`${this.password}abc`;
    }
}
const hii = new User(hii.encrypt());
