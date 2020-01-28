


const Renderer = function () {
    const renderFrogs = function (frogs) {
        $("#screen").empty();
        for (let frog of frogs) {
            $("#startButton").css("cursor","context-menu")
            $("#startButton").text("Playing..")
            $("#startButton").off("click")
            $("#screen").append(`<i class="frog fas fa-basketball-ball" id="${frog.id}"</i>`)
            $("#" + frog.id).css("color", frog.color)
            $("#" + frog.id).css("font-size", frog.position[1]/5)
            $("#" + frog.id).css("position", "absolute")
            $("#" + frog.id).css("left", frog.position[0] + "px")
            $("#" + frog.id).css("top", frog.position[1] + "px")
            $("#" + frog.id).css("cursor", "pointer")
            $('#level').text(`Level: ${gameLevel}`)
            $("#ballsLeft").text(`Balls left : ${frogs.length}`)
            
        }
    }

    return { renderFrogs }
}







