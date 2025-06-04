const myname= "moniya"
const count = 70
 
console.log(`Hello my name is ${myname} and my count is ${count}`);

const foodApp = new String('Zomato')
console.log(foodApp[0]);
console.log(foodApp.__proto__);

console.log(foodApp.length);
console.log(foodApp.toUpperCase);
console.log(foodApp.charAt(2));
console.log(foodApp.indexOf('p'));

// In substring we cannot give negative values
const newString = foodApp.substring(1,4)
console.log(newString);

const secString = foodApp.slice(-3,4)
console.log(secString);

console.log(foodApp.replace('pp','aa'));
console.log(foodApp.includes('A'));
console.log(foodApp.split('-'));




