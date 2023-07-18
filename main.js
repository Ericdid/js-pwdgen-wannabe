const firstname = prompt("Nome");
const surname = prompt("Cognome");
const color = prompt("Colore Preferito");

const identification21 = `${firstname} ${surname} ${color}21`;

document.getElementById("identification").innerHTML = identification21;
