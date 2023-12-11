/*Ejercicio 1*/
/* 
alert("1 Escribe un script que muestre tu nombre y el curso y el campo de la informática donde te gustaría trabajar");
let nombre = "Emilio";
let curso = "1º DAM";
alert("Nombre: Emilio \nCurso: 1º DAM \nNo me puedo decidir en algo realmente, " 
+ "pero lo que mas me gustaria sería: Páginas Web(Interfaces), Desarrollo de Aplicaciones o Desarrollo de videojuegos")
 */



/*2. Realiza la suma de los números que se introduzcan por teclado hasta que se lea un cero. */
/* let numero;
let suma = 0;

do {
    numero = Number(prompt("Introduzca numeros para sumarlos, (0 para termianr el programa)"));
    suma += numero;
} while (numero != 0) {
    alert("La suma de los numeros dados es = " + suma);
} */

/*3. Leer 4 valores numéricos de una cifra. Esos valores en realidad son un solo número y habrá que escribirlo 
por pantalla completo. Por ejemplo, introduzco el 1, 2, 3 y 4. El resultado es 1234. */

/* let numeroGrande = '';

for (let i = 1; i <= 4; i++) {
    numero = prompt("Introduce el numero " + i);
    numeroGrande += numero
}
alert("El resultado es " + numeroGrande); */

/*4. Leer el valor de la nota de un alumno y poner la nota correspondiente en texto. Por ejemplo,
un 7.2 es notable.*/

let nota = Number(prompt("Introduce la nota: "))

if (nota < 5) {
    alert("Un " + nota + " esta suspenso")
} else if (nota >= 5 && nota <= 7) {
    
} else {
    
}




/* let num1 = 1;
let num2 = 2;
let num3 = 'cero "es cero"'; */

/* let num1 = 2, num2 = 5, num3 = 12 */

/* alert(typeof num1);
alert(num2);
alert(num3); */

/*let edad = Number(prompt("Escriba su edad"));*/

/*let gusta = confirm("Te gusta la pagina?");*/

/* alert(typeof edad); /*Con el prompt lo lee como String hay que pasarlo a numero antes
alert(edad[0]);
alert(edad); */

/*
if(edad > 25){
    alert("Eres muy mayor");
} else {
    alert("Eres muy joven");
}
*/

/* for (let i = 0; i <= 5; i++){
    valores[i] = prompt("Introduzca el valor");
} */

/*Array*/
let valores = [];

/* for (let i = 0; i <= 4; i++){
    valores.push(prompt("Introduzca el valor"));
}
 */
/*
let maximo = valores[0];
let suma = 0;

for(let i = 0; i <= 4;i++){
    if(maximo < valores[i])
        maximo = valores[i];
    suma += valores[i];
} */

/* alert(valores);
alert("El numero " + maximo + " es el mayor")
alert(suma / 5); */


/*let i = 0;

let caracter = "Hola Mundo";

let vari = false;
*/

//const constante

// let variable "local"

//var variable "global" 