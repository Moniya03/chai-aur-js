function fetchData(){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            let success = true
            if(success){
                resolve("Data fetched successfully")
            }else{
                reject("Error fetching data")
            }
        },5000)
    })
}
fetchData() 
    .then((data) => {
        console.log(data)
        return `bonnie`
    })
    .then((value) => {
        console.log(value)
    })
    .catch((error) => {
        console.log(error)
    })