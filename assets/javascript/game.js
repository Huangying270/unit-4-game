$(document).ready(function(){

    var Random = Math.floor(Math.random() * 102 + 19);
    console.log(Random);

    $("#matchNumber").text(Random);

    var yourScore = 0;
    var wins = 0;
    var losses = 0;

    var red = Math.floor(Math.random() * 12 + 1);
    var blue = Math.floor(Math.random() * 12 + 1);
    var purple = Math.floor(Math.random() * 12 + 1);
    var green = Math.floor(Math.random() * 12 + 1);
    console.log(red);

    function winner() {
        alert("You win!");
        wins++;
        $("#wins").text(win);
    }

})
// 4 crystal variables
// each crystal will generate a random number between 1-12
// random number will be shown between 19-120 at the start of the game
// on click crystal, a number will be added to previous
// number added will be hidden until crystal is clicked
// total must match random number to win and lose if over
// game will restart after
// new game new random number, new random crystal numbers
// keep track of number of games won and loss