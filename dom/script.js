// arror function the context points to global whereas in normal function it points to the current context who is calling it

//accessing elments in dom
document.getElementById("change").addEventListener("click",function(){
    let paragraph = document.getElementById("mypara")
    paragraph.textContent = "the paragraph is changed"
})

// traversing the dom
 document.getElementById("highlight").addEventListener('click',function(){
    let cities = document.getElementById("cities")
    cities.firstElementChild.classList.add("highlight")
 })

 //manipulating the dom
 document.getElementById("ChangeOrder").addEventListener('click',function(){
    document.getElementById("coffee")
    coffee.textContent = "Espresso"
    coffee.style.backgroundColor = "brown"
    coffee.style.padding = "6px"
 })

 //creating and inserting the elements
 document.getElementById("addItem").addEventListener('click',function(){
    let newItem = document.createElement('li')
    newItem.textContent = "Eggs"
    document.getElementById("shopping").appendChild(newItem)
})

//removing dom element
document.getElementById("removeLastTask").addEventListener('click',function(){
    let taskList = document.getElementById("taskList")
    taskList.lastElementChild.remove();
})
// event handling in dom
document.getElementById("clickMeButton").addEventListener("dbclick",function(){
    alert("hello")
})

// event delegation
document.getElementById("teaList").addEventListener('click',function(event){
    if(event.target && event.target.matches(".teaItem")){
        alert("You selected:" + event.target.textContent)
    }
})

//form handling
document.getElementById("feedbackForm").addEventListener('submit',function(event){
    alert("submitted")
})
