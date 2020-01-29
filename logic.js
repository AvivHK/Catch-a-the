

const playGame = function () {

    let frogs = []
    let timeLeft = 0;
    let points = 0;
    let flag = false;

    function getFrogs() {
        return frogs
    }


    function makeNewFrogs(gameLevel) {
        for (let i = 0; i < gameLevel; i++) {
            frogs[i] = { id: i, color: getRandomColor(), position: getRandomPosition() }
        }
        if (gameLevel < 6) {
            timeLeft += 4
        }
        else {
            timeLeft += Math.round(gameLevel / 3)
        }
        flag = true;
        flag2 = true;
        return frogs
    }

    function removeFrog(id) {
        for (let i = 0; i < frogs.length; i++) {
            if (frogs[i].id == id) {
                frogs.splice(i, 1)
                points++;
                $("#points").html(points);
                playSound(true, timeLeft)
            }
        }
    }

    function checkIfWin(frogs) {
        if (frogs.length == 0) {
            playSound(false)
            return true;
        }
        else {
            return false;
        }
    }

    function updateTimer() {
        timeLeft = timeLeft - 0.25;

        if (timeLeft > 3) {
            $("#time").css("color", "black")
        }
        else {
            if ((timeLeft - Math.floor(timeLeft) == 0) || (timeLeft - Math.floor(timeLeft)) == 0.5) {
                $("#time").css('color', "red")
                $('#timer').html(Math.ceil(timeLeft));
                flag = false
            }
            else {
                $("#time").css('color', "blue")
                $('#timer').html(Math.ceil(timeLeft));
                flag = true
            }
        }

        if (((timeLeft >= 0) && (Math.round(timeLeft) - timeLeft == 0))) {
            $('#timer').html(timeLeft);
        }

        else if (timeLeft < 0) {
            clearInterval(timer);
            points = 0
            gameLevel = 1
            frogs = []
            $("#screen").empty();
            $("#screen").append("<div id='gameOver'>Game Over</div>")
            $("#startButton").on("click", startBtnFunc)
            $("#startButton").text("Play again")
            $("#startButton").css("cursor", "pointer")

        }
    }

    function playSound(sound, timeLeft) {
        let basket = document.getElementById("basket")
        let countdown = document.getElementById("countdown")
        let cheering = document.getElementById("cheering")

        if (!sound) {
            oldLevel = level
            cheering.play()
        }
        else if (timeLeft == 2) {
            countdown.play()
        }
        else if (points % 4 == 0) {
            basket.play()
        }
    }

    const updatePoints = () => $("#points").html(points);


    return { getFrogs, removeFrog, makeNewFrogs, checkIfWin, updateTimer, updatePoints }
}

function getRandomPosition() {
    let randPosY = -1
    let randPosX = 10000
    let bodyWidth = document.getElementById("screen").clientWidth;
    let bodyHeight = document.getElementById("screen").clientHeight;
    let upperBar = document.getElementById("upperBar").clientHeight;
    while ((randPosY < upperBar) || (1.2 * randPosY > upperBar + bodyHeight)) {
        randPosY = Math.floor((Math.random() * (bodyHeight)));

    }
    while ((1.15 * randPosX > bodyWidth)) {
        randPosX = Math.floor((Math.random() * (bodyWidth)));
    }
    let arr = [randPosX, randPosY]
    return (arr)
}


function getRandomColor() {
    var colorArray =
        ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
            '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
            '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
            '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
            '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
            '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
            '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
            '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
            '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
            '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
    return (colorArray[Math.floor(Math.random() * 50)]);
}


