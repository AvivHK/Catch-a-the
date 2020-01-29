const game = playGame()
const renderer = Renderer();
let gameLevel = 1
let timer;


const startBtnFunc = function () {
    renderer.renderFrogs(game.makeNewFrogs(gameLevel));
    timer = setInterval(game.updateTimer, 250);
    game.updateTimer()
    game.updatePoints()
    if (game.checkIfWin(game.getFrogs())) {
        gameLevel++;
    }
}


$("#startButton").on("click", startBtnFunc)

$("#screen").on("click", ".frog", function () {
    game.removeFrog($(this).attr("id"))
    game.checkIfWin(game.getFrogs())
    renderer.renderFrogs(game.getFrogs())
    if (game.getFrogs() == 0) {
        gameLevel++;
        renderer.renderFrogs(game.makeNewFrogs(gameLevel));
    }
})

