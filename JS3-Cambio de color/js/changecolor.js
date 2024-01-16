let btnRojo = document.getElementById('btnrojo');
let btnVerde = document.getElementById('btnverde');
let btnAzul = document.getElementById('btnazul');
let btnAmarillo= document.getElementById('btnamarillo');
let btnReset = document.getElementById('btnreset');
let box = document.querySelector('.box');
// Color añadido
let btnMorado = document.getElementById('btnmorado');

function setColorRojo() {
  if(btnRojo.value == "rojo") {
    box.style.background = "#FF3232";
  }
}

function setColorVerde() {
  if(btnVerde.value == "verde") {
    box.style.background = "#84ff6e";
  }
}

function setColorAzul() {
  if(btnAzul.value == "azul") {
    box.style.background = "#6ed8ff";
  }
}

function setColorAmarillo() {
  if(btnAmarillo.value == "amarillo") {
    box.style.background = "#F4FA4B";
  }
}

function setColorReset() {
  if(btnReset.value == "reset") {
    box.style.background = "white";
  }
}

// Funcion de color añadida
function setColorMorado() {
  if(btnMorado.value == "morado") {
    box.style.background = "#952FFA";
  }
}

  function changeColor(element, bgColor,fontColor) {
    element.style.background = bgColor;
    element.style.color = fontColor;
  }

  function changeColorReset(element) {
    element.style.background = "";
    element.style.color = "";
  }


