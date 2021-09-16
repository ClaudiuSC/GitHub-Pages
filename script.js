const playerTurn = document.getElementById("player-turn")
const scoreOne = document.getElementById("score1")
const scoreTwo = document.getElementById("score2")
let diceOne = document.getElementById("dice1")
let diceTwo = document.getElementById("dice2")
const rollDiceBtn = document.getElementById("roll-dice")
const resetGameBtn = document.getElementById("reset-game")
let turn = 1
let gameState = true
let trackScoreOne = 0
let trackScoreTwo = 0

rollDiceBtn.addEventListener("click", () => play())

resetGameBtn.addEventListener("click", ()=> {    
    turn = 1
    trackScoreOne = 0
    trackScoreTwo = 0
    diceOne.textContent = "-"
    diceTwo.textContent = "-"
    scoreOne.textContent= "0"
    scoreTwo.textContent= "0"
    playerTurn.textContent ="1 Turn"
    startGame()
})


function play() {
  if (turn % 2 === 1) {
    const dice = Math.floor(Math.random() * 6 + 1)
    trackScoreOne += dice
    scoreOne.textContent = trackScoreOne
    diceOne.textContent = dice
    playerTurn.textContent ="2 Turn"
    diceOne.classList.remove("active-dice")
    diceTwo.classList.add("active-dice")
  } else if (turn %2 === 0) {
    const dice = Math.floor(Math.random() * 6 + 1)
    trackScoreTwo += dice
    scoreTwo.textContent = trackScoreTwo
    diceTwo.textContent = dice
    playerTurn.textContent ="1 Turn" 
    diceTwo.classList.remove("active-dice")
    diceOne.classList.add("active-dice")
  }
  if(trackScoreOne >= 20) {
    gameState = false
    playerTurn.textContent ="1 Has Won 🥳"
    resetGame()
  } else if(trackScoreTwo >= 20) {
    gameState = false
    playerTurn.textContent ="2 Has Won 🎉"
    resetGame()
  }
  turn++
} 

function startGame() {
  rollDiceBtn.classList.add("active-btn")
  resetGameBtn.classList.remove("active-btn")
}

function resetGame() {
  rollDiceBtn.classList.remove("active-btn")
  resetGameBtn.classList.add("active-btn")
}
