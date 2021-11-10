let deckId
let playerOne
let playerTwo
const drawBtn = document.getElementById("draw-btn")
const remainingCards = document.getElementById("remaining-cards")
let scoreOne = 0
let scoreTwo = 0

// ====================================Event listeners=========================================================
// ============================================================================================================
// get deck of cards
document.getElementById("shuffle-btn").addEventListener("click", () => {
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
        .then(res => res.json())
        .then(data => {
            deckId = data.deck_id
            drawBtn.disabled = false
            remainingCards.innerText = data.remaining
            document.getElementById("computer-score").innerText = 0
            document.getElementById("player-score").innerText = 0
            document.getElementById("computer-player").innerHTML = ""
            document.getElementById("human-player").innerHTML = ""
        })
})

// draw two cards
drawBtn.addEventListener("click", () => {
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            remainingCards.innerText = data.remaining
            document.getElementById("computer-player").innerHTML = `<img src="${data.cards[0].image}">`
            document.getElementById("human-player").innerHTML = `<img src="${data.cards[1].image}">`
            evalCards(data.cards[0].value, data.cards[1].value)
            // checkGameEnd(data.remaining)
        })
})


// ============================================================================================================
// evaluate the card values + add score + render score
function evalCards(cardOne, cardTwo) {
    playerOne = changeCardValue(cardOne)
    playerTwo = changeCardValue(cardTwo)
    if(playerOne !== playerTwo){
        playerOne > playerTwo ? scoreOne++ : scoreTwo++
    }
    document.getElementById("computer-score").innerText = scoreOne
    document.getElementById("player-score").innerText = scoreTwo
}

// change the value of the cards with pictures on them
function changeCardValue(card) {
    const evalCards = ({
        "JACK": 12,
        "QUEEN" : 13,
        "KING": 14,
        "ACE": 15,
    })[card] ?? card
    return parseInt(evalCards)
}

// check for the end of the game
// function checkGameEnd(remaining) {
//     if(remaining === 0) {

//     }
// }
        


