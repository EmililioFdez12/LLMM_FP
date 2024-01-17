// Texto del titulo
document.getElementById('tit').innerHTML = ("Este es el titulo de la página");
document.getElementById('tit').style.color = ('#6ed8ff');
document.getElementById('tit').style.display = ('flex');
document.getElementById('tit').style.justifyContent = ('center');
document.getElementById('tit').style.alignItems = ('center');
document.getElementById('tit').style.marginTop = ('2vh');
document.getElementById('tit').style.marginBottom = ('2vh');
document.getElementById('tit').style.fontSize = ('8vh');
document.getElementById('tit').style.fontFamily = ('Bebas Neue');
document.getElementById('tit').style.width = ('100vw');

// Cambia imagen
let contadorImagen = 2;
// Bucle para que puedas cambiar de imagen siempreF
function cambiarImagen() {
  if ((contadorImagen % 2) == 0) {
    document.getElementById('fotoCambiante').src = ('images/somiel.png');
    contadorImagen++;
  } else {
    document.getElementById('fotoCambiante').src = ('images/frozono.jpg');
    contadorImagen++;
  }
}


let btnRojo = document.getElementById('btnrojo');
let btnVerde = document.getElementById('btnverde');
let btnAzul = document.getElementById('btnazul');
let btnAmarillo = document.getElementById('btnamarillo');
let btnReset = document.getElementById('btnreset');
let box = document.querySelector('.box');
// Color añadido
let btnMorado = document.getElementById('btnmorado');

//Cambio de colores
function setColorRojo() {
  if (btnRojo.value == "rojo") {
    box.style.background = "#FF3232";
    tit.style.color = "#FF3232";
  }
}

function setColorVerde() {
  if (btnVerde.value == "verde") {
    box.style.background = "#84ff6e";
    tit.style.color = "#84ff6e";
  }
}

function setColorAzul() {
  if (btnAzul.value == "azul") {
    box.style.background = "#6ed8ff";
    tit.style.color = "#6ed8ff";
  }
}

function setColorAmarillo() {
  if (btnAmarillo.value == "amarillo") {
    box.style.background = "#F4FA4B";
    tit.style.color = "#F4FA4B";
    
  }
}

function setColorReset() {
  if (btnReset.value == "reset") {
    box.style.background = "white";
    tit.style.color = "#6ed8ff";
  }
}

// Funcion de color añadida
function setColorMorado() {
  if (btnMorado.value == "morado") {
    box.style.background = "#952FFA";
    tit.style.color = "#952FFA";
  }
}


function changeColor(element, bgColor, fontColor) {
  element.style.background = bgColor;
  element.style.color = fontColor;
}

function changeColorReset(element) {
  element.style.background = "";
  element.style.color = "";
}

// Reloj
function actualizarReloj() {
  var reloj = new Date()
  var horas = reloj.getHours();
  var minutos = reloj.getMinutes();
  var segundos = reloj.getSeconds();
  var diaSemana = reloj.toLocaleDateString('es-ES', { weekday: 'long' })
  var fecha = reloj.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: "2-digit" })

  var horaCompleta = horas + " : " + (minutos < 10 ? '0' + minutos : minutos) + " : " + (segundos < 10 ? '0' + segundos : segundos) + " " + diaSemana.toUpperCase() + " " + fecha.toUpperCase();

  document.getElementById("reloj").innerHTML = horaCompleta;
}

//Para actualizar el reloj
setInterval(actualizarReloj, 1000);

// Inicializar el reloj al cargar la página
actualizarReloj();



function preguntaTiempo(){
  let confirmar = confirm("¿Desea salir de la página?");
  if(confirmar){
    window.location.href = 'https://www.formula1.com';
  }
}

// 1 intervalo es = 1 milisegundo
// Por lo tanto 3 minutos = 180.000
// Pregunta cada 3 minutos
setInterval(preguntaTiempo,180000)
