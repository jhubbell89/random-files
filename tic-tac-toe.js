//define constants
const cells = document.querySelectorAll (".cell");
const statusText = document.querySelector ("#gameStatus");
const restartBtn = document.querySelector ("#restartButton");
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
// let running = false;
let currentPlayer = 'x'

// run game on click

cells.forEach(cell => cell.addEventListener('click', cellClicked))


// what happens if i click on a cell
// need to determine which player clicked then display the char in the cell
//make sure i cant click on the updated square
function cellClicked(event) {
    event.target.innerText = 'x'
    console.log('clicked')

}
console.log()

//needs to switch after click and display who the current player is below the game

function changePlayer () {
     if (currentPlayer == 'x') {
    currentPlayer = 'o';
    } else {
    currentPlayer = 'x'
}}
console.log(currentPlayer)


//check to see if there is a winner 
//
// function checkWinner () {

// }

// restart game
cells.forEach(cell => cell.addEventListener('click', cellClicked))
function restartGame () {
    cells = ""
    console.log(hello)
}
