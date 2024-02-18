let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];

export function checkWinner(gameBoard) {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winningCombos.some(combo => {
        const [a, b, c] = combo;
        return !!(gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]);
    });
}

if (typeof window !== 'undefined') {
    const board = document.getElementById('board');
    const cells = document.querySelectorAll('.cell');
    const resetButton = document.getElementById('reset-btn');
    const resetButton2 = document.getElementById('reset-btn2');
    const winningMessageElement = document.getElementById('winningMessage')
    const winningMessageTextElement = document.querySelector('[data-winning-message-text]')

    resetButton.addEventListener('click', resetGame);
    resetButton2.addEventListener('click', resetGame);

    function resetGame() {
        winningMessageElement.classList.remove('show')
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        currentPlayer = 'X';
        cells.forEach(cell => cell.textContent = '');
    }

    cells.forEach((cell, index) => {
        cell.addEventListener('click', () => {
            if (gameBoard[index] === '') {
                gameBoard[index] = currentPlayer;
                cell.textContent = currentPlayer;
                if (checkWinner(gameBoard)) {
                    winningMessageTextElement.innerText = `${currentPlayer} wins!`
                    winningMessageElement.classList.add('show')
                } else if (gameBoard.every(cell => cell !== '')) {
                    winningMessageTextElement.innerText = 'Draw!'
                    winningMessageElement.classList.add('show')
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            }
        });
    });
}


