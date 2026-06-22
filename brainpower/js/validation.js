document
.getElementById("contactForm")
.addEventListener("submit", function(event){

event.preventDefault();

let elev =
document.getElementById("elev").value;

let parinte =
document.getElementById("parinte").value;

let telefon =
document.getElementById("telefon").value;

let email =
document.getElementById("email").value;

let mesaj =
document.getElementById("mesaj");

if(
elev === "" ||
parinte === "" ||
telefon === "" ||
email === ""
){

mesaj.innerHTML =
"Completați toate câmpurile!";

mesaj.style.color = "red";

}
else{

mesaj.innerHTML =
"Formular trimis cu succes!";

mesaj.style.color = "green";

}

});