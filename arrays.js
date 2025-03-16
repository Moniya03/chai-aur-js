// add berlin to the array cities
let cities = ["Mumbai","Delhi","Chandigrah"]
cities[cities.length] = "Berlin"
console.log(cities)
// or by using push method
cities.push("Berlin")

//Using pop method remove the last element
// pop removes and return last value
console.log(cities.pop())
console.log(cities)

// create soft copy of array - both arrays point to the same memory location,changes in original array are also reflected in its copy
let scities = cities
cities.pop()
console.log(cities)
console.log(scities)

// create hard copy of array
let hcities = [...cities]
cities.pop()

let europeanCities = ["Paris","Rome"]
let asianCities = ["Tokyo","Bangkok"]
let worldCities = europeanCities.concat(asianCities)
console.log(worldCities)

// check if delhi is in list 
let isDelhi = cities.includes(Delhi)

// remove first element
const first = cities.shift()
console.log(cities)

//add element at start
const add = cities.unshift("Dehradun")
console.log(add)

