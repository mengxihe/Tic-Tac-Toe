console.log('Hi')


const GameBoard = (() => {
    const row = 3;
    const col = 3;
    // const gameboard = ["X", "X", "X", "O", "O", "O", "X", "X", "X"];
    
    const boardDiv = document.getElementById("board");
    // const render = (board) => {
    //     nHTML = '';
    //     board.forEach(item => nHTML += '<li>' + item +'<li>');
    //     const display = boardDiv.innerHTML = '<ul>' + nHTML + '</ul>';
    //     return display;
    // }
    // output = render(gameboard)

    const buildGrid = () => {
        boardDiv.style.display = "grid";
        boardDiv.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        boardDiv.style.gridTemplateRows = `repeat(${row}, 1fr)`;
        for (let i = 0; i< row*col; i++) {
            let square = document.createElement('div');
            square.classList.add('square');
            // square.addEventListener ('click', handleClick);
            square.style = "background-color: white; width: 8rem; height: 8rem;";
            boardDiv.appendChild(square);
        }
    }

    const handleClick = (e) => {
        e.target.style.backgroundColor = "red";
    }
    return {
        // output,
        buildGrid,
    };
})();


const Player = () => {

}



const displayController = (() => {

})();



GameBoard.buildGrid();
