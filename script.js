const h1Jmeno = document.getElementById("h1Jmeno");
const imgGender = document.getElementById("imgGender");

imgGender.width = "250"

let pocitadlo = 1;

function changeGender () {
    if (pocitadlo % 2 == 0) {
    imgGender.src = "obrazky/dite-muz.png";
    }
    else {
    imgGender.src = "obrazky/dite-zena.png";
    }
  pocitadlo = pocitadlo + 1;
}