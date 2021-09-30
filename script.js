const binInput = document.querySelector(".binary")
const btn = document.querySelector("#btn")
const result = document.querySelector("#result")

binInput.addEventListener("keyup", checkInput)
btn.addEventListener("click", () => {if(checkInput() != 0){result.textContent = binToDec(binInput.value)}})

function binToDec(x) {
    let counter = 0
    let total = 0
    for (let i=x.length-1; i>-1 ;i--) {
        if ( x[i] == 1) {
            total += 2**counter
        }
        counter++
    }
    return total    
}

function checkInput() {
    const search = binInput.value
    for (let i = 0; i < search.length; i++) {
        if(search[i] != 0 && search[i] != 1) {
            binInput.classList.add("show") 
            return 0
        } else if (search[i] == 0) {
            binInput.classList.remove("show")
        } else if (search[i] == 1) {
            binInput.classList.remove("show") 
        }
    }
}

