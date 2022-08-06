console.log('Hi')

const GameBoard = (() => {
    const row = 3;
    const col = 3;
    const vacant = "white";
    const sq = 100;
    const gameboard = ["X", "X", "X", "O", "O", "O", "X", "X", "X"]
    const render = (board) => {
        nHTML = '';
        board.forEach(item => nHTML += '<li>' + item +'<li>');
        const display = document.getElementById("board").innerHTML = '<ul>' + nHTML + '</ul>';
        return display;
    }
    output = render(gameboard)
    const buildGrid = () => {
        
    }
    return {
        output,
    };
})();

const displayController = (() => {

})();

const Player1 = () => {

}

const Player2 = () => {

}

