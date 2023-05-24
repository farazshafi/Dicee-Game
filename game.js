function playGame(){
    getRandomNumber();
}
// random number generator function
function getRandomNumber() {

    var playerOne = Math.floor(Math.random() * (7 - 1) + 1);
    var playerTwo = Math.floor(Math.random() * (7 - 1) + 1);

    if (playerOne > playerTwo) {
        console.log("Player one Win");
        document.querySelector(".headding").innerHTML = "Player One Win";
    } else if (playerOne < playerTwo) {
        console.log("Player two win");
        document.querySelector(".headding").innerHTML = "Player Two Win";
    } else {
        console.log("Draw");
        document.querySelector(".headding").innerHTML = "Match Draw";
    }
    // Image Condition
    if (playerOne === 1) {
        document.querySelector("img.img1").src = "images/dice1.png";
    } else if (playerOne === 2) {
        document.querySelector("img.img1").src = "images/dice2.png";
    } else if (playerOne === 3) {
        document.querySelector("img.img1").src = "images/dice3.png";
    } else if (playerOne === 4) {
        document.querySelector("img.img1").src = "images/dice4.png";
    } else if (playerOne === 5) {
        document.querySelector("img.img1").src = "images/dice5.png";
    } else if (playerOne === 6) {
        document.querySelector("img.img1").src = "images/dice6.png";
    }

    if (playerTwo === 1) {
        document.querySelector("img.img2").src = "images/dice1.png";
    } else if (playerTwo === 2) {
        document.querySelector("img.img2").src = "images/dice2.png";
    } else if (playerTwo === 3) {
        document.querySelector("img.img2").src = "images/dice3.png";
    } else if (playerTwo === 4) {
        document.querySelector("img.img2").src = "images/dice4.png";
    } else if (playerTwo === 5) {
        document.querySelector("img.img2").src = "images/dice5.png";
    } else if (playerTwo === 6) {
        document.querySelector("img.img2").src = "images/dice6.png";
    }
}