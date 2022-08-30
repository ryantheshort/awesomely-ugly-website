/*
Author: Ryan Short
Date: 8/29/2022
Awesome Ugly Website
*/

/* loadUglyPicture = pringles, loadNanerPicture = orangenana */

function loadUglyPicture() {
    document.getElementById("uglyimg").src="images/pringlesugly.jpeg";
}
function loadNanerPicture(){
    document.getElementById("uglyimg").src="images/orangenana.jpeg";
}
/*As the webpage loads it loads the pringles picture (even though redundant) */
window.addEventListener("load", loadUglyPicture);

/* The click button will only switch FROM the pringles photo to the orangenana picture, not back and forth*/
var a = document.getElementById("btn");
if(a.addEventListener){
    a.addEventListener("click", loadNanerPicture, false);
} else if (a.attachEvent) {
    a.attEvent("onclick",loadNanerPicture);
}