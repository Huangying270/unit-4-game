$(document).ready(function(){

    var Random = Math.floor(Math.random() * 102 + 19);
    console.log(Random);

    $("#matchNumber").text(Random);

    var yourScore = 0;
    var wins = 0;
    var losses = 0;

    var redNumber = Math.floor(Math.random() * 12 + 1);
    var blueNumber = Math.floor(Math.random() * 12 + 1);
    var purpleNumber = Math.floor(Math.random() * 12 + 1);
    var greenNumber = Math.floor(Math.random() * 12 + 1);
    console.log(redNumber);

    $(".red").on("click", function(){
        yourScore = yourScore + redNumber;
        console.log(yourScore);
        $("#crystalScore").text(yourScore);
    })

    $(".blue").on("click", function(){
        yourScore = yourScore + blueNumber;
        console.log(yourScore);
        $("#crystalScore").text(yourScore);
    })

    $(".purple").on("click", function(){
        yourScore = yourScore + purpleNumber;
        console.log(yourScore);
        $("#crystalScore").text(yourScore);
    })

    $(".green").on("click", function(){
        yourScore = yourScore + greenNumber;
        console.log(yourScore);
        $("#crystalScore").text(yourScore);
    })

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