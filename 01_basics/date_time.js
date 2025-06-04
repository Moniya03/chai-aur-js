// Date - object
let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

let myCreatedDate = new Date(2023,4,5)
console.log(myCreatedDate.toLocaleString());

let date2 = new Date("2-1.2024")
console.log(date2.toLocaleString());

let myTimestamp = Date.now()
console.log(myTimestamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1); // starts from 0
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long"
})





