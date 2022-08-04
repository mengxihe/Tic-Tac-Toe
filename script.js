console.log('Hi')

const GameBoard = (() => {
    const gameboard = ["X", "X", "X", "O", "O", "O", "X", "X", "X"]
    const render = (board) => {
        nHTML = '';
        board.forEach(item => nHTML += '<li>' + item +'<li>');
        const display = document.getElementById("board").innerHTML = '<ul>' + nHTML + '</ul>';
        return display;
    }
    output = render(gameboard)
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

