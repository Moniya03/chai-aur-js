// Calling function within another function
function orderTea(TeaType){
    function confirmOrder(){
        return 'Order confirmed for chai'
    }
    return confirmOrder
}
let order = orderTea()
console.log(order)

// First-Class Functions - A function can be passed as an argument to other function,can be returned by another function and can be assigned as a value to a variable

// function processOrder that takes another function makeTea as a parameter and calls it with the argument of earl grey. Return the result of calling makeTea
function makeTea(typeofTea){
    return `${typeofTea}`
} 
function processOrder(tea){
    return tea('earl grey')
}
let order2 = processOrder(makeTea)
console.log(order2)

function createTea(favTea){
    return favTea
}
function favTea(TeaType){
    return `Making ${TeaType}`
}
let order3 = createTea("green tea")
console.log(order3)