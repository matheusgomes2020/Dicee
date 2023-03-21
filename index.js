var ramdomNumber1 = Math.floor(Math.random() * 6 ) + 1;
var ramdomNumber2 = Math.floor(Math.random() * 6 ) + 1;

document.querySelector(".img1").setAttribute("src", "images/dice" + ramdomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + ramdomNumber2 + ".png");

if( ramdomNumber1 > ramdomNumber2 ) {
    document.querySelector("h1").innerHTML= "🚩 Player 1 Wins!"
}else if (ramdomNumber2 > ramdomNumber1 ) {
    document.querySelector("h1").innerHTML= "Player 2 Wins! 🚩"
} else {
    document.querySelector("h1").innerHTML= "Empate"
}