//Calculates sum for first 5 numbers
let sum = 0
let i = 1
while(i<=5){
    sum = sum + i
    i++
}
console.log(sum)

// for loop that multiply each element by 2 and puts it into multipliednumbers array
let multipliedNumbers = []
let numbers = [2,4,6]
for(let l =0;l<numbers.length;l++){
    multipliedNumbers.push(numbers[l]*2)
}
console.log(multipliedNumbers)

// Store each city in cities array to cityList array
let cities = ["Paris","New York","London","Tokyo"]
let cityList = []
for(let c = 0;c<cities.length;c++){
    const myCity = cities[c]
    cityList.push(myCity)
}
console.log(cityList)