// Store all teas before chai in selectedTeas array
let tea = ["oolong tea","black tea","green tea","chai"]
let selectedTeas = []
for(i=0;i<tea.length;i++){
    if(teas[i] === 'chai'){
        break;
    }
    selectedTeas.push(teas[i])
}
console.log(selectedTeas)

// use for-of loop and store all numbers in smallNumbers array before 4
let numbers = [1,2,3,4,5]
let smallNumbers = []
for(const num of numbers){
    if(num === 4){
        break;
    }
    smallNumbers.push(num)
}

//Using for in loop store all cities till berlin in a new array
let citiesPopulation = {
    "London" : 89000005,
    "Paris" : 8466560,
    "New York" : 5663260,
    "Tokyo" : 40000
}
let cityPop = {}
let cityNewPopulations = {}
for(const city in citiesPopulation){
    if(city == "Berlin"){
        break;
    }
    cityNewPopulations[city] = citiesPopulation[city]
}
console.log(cityNewPopulations)

// Using for-each loop push all elements of tea array in available tea array and stop when chai is found
let availableTeas = []
tea.forEach(function(teas){
    if(teas === 'chai'){
        return;
    }
    availableTeas.push(teas)
});
console.log(availableTeas)
