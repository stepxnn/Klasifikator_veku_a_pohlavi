const h1Jmeno = document.getElementById("h1Jmeno");
const imgGender = document.getElementById("imgGender");

imgGender.width = "250"

let pocitadlo = 1;

function changeGender () {
    if (pocitadlo % 2 == 0) {
    imgGender.src = "obrazky/dite-muz.png";
    h1Jmeno.textContent = "Štěpán";
    }
    else {
    h1Jmeno.textContent = "Štěpánka";
    imgGender.src = "obrazky/dite-zena.png";
    }
  //pocitadlo = pocitadlo + 1;
    pocitadlo++; //inkrementuj (přičti o 1)
}