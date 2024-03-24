const newGameBtn = document.querySelector(".newGameBtn");
const board = document.querySelector(".gameBoard");
const btn1 = document.getElementById("1");
const btn2 = document.getElementById("2");
const btn3 = document.getElementById("3");
const btn4 = document.getElementById("4");
const btn5 = document.getElementById("5");
const btn6 = document.getElementById("6");
const btn7 = document.getElementById("7");
const btn8 = document.getElementById("8");
const btn9 = document.getElementById("9");
const gameBtns = document.querySelectorAll(".gameBtn");
const btnPl1 = document.getElementById("pl1");
const btnPl2 = document.getElementById("pl2");
const winnerComp =  [[1,2,3],[4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];
const selectionX = [];
const selectionO = [];

console.log(gameBtns.length);
board.dataset.symbol = "X";
board.dataset.winner = "";

newGameBtn.addEventListener('click', () => {
    document.querySelector(".playersLbls").remove();
    newGameBtn.style.margin = "8vh";
    newGameBtn.remove();
    const gameText = document.createElement("p");
    gameText.innerText("text");
});

gameBtns.forEach(button => {
    button.addEventListener('click', () => {
        button.innerHTML = board.dataset.symbol;
        button.disabled = true;
        if (board.dataset.symbol == "X") {
            selectionX.push(Number(button.value));
            console.log(selectionX);
            board.dataset.symbol = "O";
        } else {
            selectionO.push(Number(button.value));
            console.log(selectionO);
            board.dataset.symbol = "X";
        }
        if (checkWinner(winnerComp, selectionX)) {
            alert("Player 1 wins!");
        } else if (checkWinner(winnerComp, selectionO)) {
            alert("Player 2 wins!");
        } else if (selectionO.length ===5 || selectionX.length === 5) {
            btnClear();
            alert("It's a tie!");
        }
    });
});

function checkrst(lib, rlt) {
    //checks number of common items between 2 arrays
    const chck = [];
    for (let i=0; i<rlt.length; i++) {
        if (lib.includes(rlt[i])) {
            chck.push(rlt[i]);
        } 
    } 
    return chck.length;
}

function checkWinner(bigarr, smlarr) {
    //applies checkrst in each array in an array
    for (let i=0; i<bigarr.length; i++) {
        if (checkrst(bigarr[i], smlarr) ===3) {
            return true;
            break;
        }
    } return false;
}

function btnClear() {
    for (let i=0; i<gameBtns.length; i++) {
        gameBtns[i].innerHTML = "";
        gameBtns.disabled = false;
    }
    }

function createPlayer(name) {
    const playerName = name;
    let playerScore = 0;
    const getScore = () => playerScore;
    const setScore = () => playerScore++;
    return {name, playerScore, getScore, setScore};
}
    
