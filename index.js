document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    let currentPlayer = 'X';
    const cells = Array.from({ length: 9 }, (_, index) => createCell(index));
  
    function createCell(index) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.addEventListener('click', () => cellClick(index));
      board.appendChild(cell);
      return cell;
    }
  
    function cellClick(index) {
      const cell = cells[index];
  
      if (cell.textContent === '' && !checkWinner()) {
        cell.textContent = currentPlayer;
        if (checkWinner()) {
          alert(`Player ${currentPlayer} wins!`);
        } else if (cells.every(cell => cell.textContent !== '')) {
          alert('It\'s a draw!');
        } else {
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
      }
    }
  
    function checkWinner() {
      const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
      ];
  
      return winningCombinations.some(combination =>
        combination.every(index => cells[index].textContent === currentPlayer)
      );
    }
  });
  