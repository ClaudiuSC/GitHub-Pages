const smallCups = document.querySelectorAll(".cup-small")
const liters =  document.getElementById("liters")
const percentage =  document.getElementById("percentage")
const remained =  document.getElementById("remained")
const goal = document.getElementById("goal")

renderLitres()

smallCups.forEach((cup, index) => {
    cup.addEventListener("click", () => highlightCups(index))
})

function highlightCups(index) {
    // first if is to check for the end of the array - we get an error for the next sibling class list if last in array
    // second if adds the functionality of emptying a glass by clicking on it(not true for the last glass though)
    // added OR condition so that you can empty the last cup(and eliminated an error regarded to the next sibling when index was las of array)
    if  (smallCups[index].classList.contains("full") && 
        (!smallCups[index].nextElementSibling || !smallCups[index].nextElementSibling.classList.contains("full"))) {
        index--
    } 

    // compares the index of the cup that is clicked and adds the class "full" to all the elements to that index AND removes the class "full" for the ones that have bigger indexes
    smallCups.forEach((cup, index2) => {
        if(index2 <= index) {
            cup.classList.add("full")
        } else {
            cup.classList.remove("full")
        }
    })
    
    renderLitres(index)
    

    updateBigCup(index)
}

function updateBigCup(index) {
    const calc = 100 / smallCups.length * (index + 1)
    // makes the text disappear if the value is 0
    percentage.innerText = calc ? `${calc}%` : ""
    // sets the height of the element
    percentage.style.height = `${calc}%`

    if(calc === 100) {
        remained.style.height = "0"
    }
}


function renderLitres(index) {
        goal.innerText = `${.25*smallCups.length}`
        liters.innerText = `${.25*smallCups.length - .25 * ((index + 1) ? (index + 1) : 0)}L`
        // liters.innerText = `${2 - .25 * (index + 1)}L`
}