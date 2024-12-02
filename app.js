const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const board = document.getElementById("board")
  const cells = document.getElementsByClassName("cell")
  const players = ['X', 'O']
  let currentPlayer = players[0]
  let gameOver = false;

  const endMessage = document.createElement('h2')
  endMessage.textContent = "X's Turn!"
  endMessage.style.marginTop = '30px'
  endMessage.style.textAlign = 'center'
  board.after(endMessage)

  function checkWin(currentPlayer) {
    for(let i = 0; i <winCombinations.length; i++){
        const[a, b, c] = winCombinations[i]
        if(cells[a].textContent === currentPlayer && cells[b].textContent === currentPlayer && cells[c].textContent === currentPlayer){
            return true
        }
    }
    return false
  }

  function checkTie(){
    for(let i = 0; i <cells.length; i++){
        if (cells[i].textContent === ""){
            return false;
        }
    }
    return true;
  }

  function restartButton(){
    for(let i = 0; i< cells.length; i++){
        cells[i].textContent = ""
    }
    endMessage.textContent = "X's Turn!"
    currentPlayer = players[0]
    gameOver = false;
  }

  const restartBtn = document.querySelector('.restart');
  restartBtn.addEventListener('click', restartButton);
  for(let i = 0; i < cells.length; i++){
    cells[i].addEventListener('click', () => {
        if (gameOver || cells[i].textContent !== '') {
            return;
        }
    })
  }

  for (let i = 0; i < cells.length; i++){
    cells[i].addEventListener('click', () => {
        if(cells[i].textContent !== ''){
            return
        }
        cells[i].textContent = currentPlayer
        if(checkWin(currentPlayer)){
            endMessage.textContent=`Game over! ${currentPlayer} wins!`
            return
        }
        if(checkTie()){
            endMessage.textContent=`It's a tie!`
            return
        }
        currentPlayer = (currentPlayer === players[0]) ? players[1] : players[0]
        if (currentPlayer == players[0]) {
            endMessage.textContent= `X's Turn!`
        } else {
            endMessage.textContent=`O's Turn!`
        }
    })
  }