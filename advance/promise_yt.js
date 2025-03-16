const promiseOne = new Promise(function(resolve,reject){
    //Do an async task,DB calls,crytography,network calls
    setTimeout(function(){
        console.log("Async task is completed")
        resolve()
    },2000)
})
promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },2000)
}).then(function(){
    console.log("Async 2 is resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({
            username:"Bonnie",
            email:"Bonnie@example.com"
        })
    },3000)
})
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve("Bonnie")
        }
        else{
            reject("ERROR")
        }
    },1000)
})
promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve("Bonnie")
        }else{
            reject("ERROR")
        }
    },2000)
})
async function consumeFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumeFive()

async function getAll() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
getAll()
fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json()
})
.then((data) =>{
    console.log(data);
})
.catch((error) => console.log(error))