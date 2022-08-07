const GameBoard = (() => {

    let boardData = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]
    
    const boardDiv = document.getElementById("board");

    const buildGrid = () => {
        boardDiv.style.display = "grid";
        boardDiv.style.gridTemplateColumns = 'repeat(3, 1fr)';
        boardDiv.style.gridTemplateRows = 'repeat(3, 1fr)';
        boardDiv.style.gap = '20px'
        for (let i = 0; i< 3*3; i++) {
            let square = document.createElement('div');
            square.classList.add('square');
            square.style = "background-color: white; width: 8rem; height: 8rem;";
            boardDiv.appendChild(square);
        }
    }
    //build html square divs
    buildGrid();

    return {
        boardData,
    }

})();


const Player = () => {

}



const displayController = (() => {

    let player = 1;
    //get cells from DOM
    const squareElements = document.querySelectorAll('.square');
    squareElements.forEach((cell, index) => {
        cell.addEventListener('click', ()=>{placeMarker(index)})
    })


    const placeMarker = (index) => {
        let col = index % 3;
        let row = (index - col) / 3;
        if (GameBoard.boardData[row][col] == 0) {
            GameBoard.boardData[row][col] = player;
            player *= -1;
            drawMarker();
            // console.log(GameBoard.boardData);
        }
    }

    const drawMarker = () => {

        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++){
                if (GameBoard.boardData[row][col] == 1){
                    squareElements[(row*3) + col].classList.add('circle');
                }
                if (GameBoard.boardData[row][col] == -1){
                    squareElements[(row*3) + col].classList.add('cross');
                }
            }
        }
        
    }

})();



// const row = 3;
// const col = 3;
// let boardData = [
//         [0, 0, 0],
//         [0, 0, 0],
//         [0, 0, 0]
//     ]
    
// const boardDiv = document.getElementById("board");


// const buildGrid = () => {
//         boardDiv.style.display = "grid";
//         boardDiv.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
//         boardDiv.style.gridTemplateRows = `repeat(${row}, 1fr)`;
//         boardDiv.style.gap = '20px'
//         for (let i = 0; i< row*col; i++) {
//             let square = document.createElement('div');
//             square.classList.add('square');
//             // square.addEventListener ('click', placeMarker(i));
//             square.style = "background-color: white; width: 8rem; height: 8rem;";
//             boardDiv.appendChild(square);
//         }
//     }
// buildGrid();
//     //get cells from DOM
// const squareElements = document.querySelectorAll('.square');
// squareElements.forEach((cell, index) => {
//         cell.addEventListener('click', ()=>{console.log(index)})})



