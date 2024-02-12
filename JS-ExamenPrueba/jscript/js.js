
let arrayAleatorio = [];

for (let i = 0; i < 50; i++) {
    let numerosArray = (parseInt(Math.random() * 120));
    arrayAleatorio.push(numerosArray);
}

alert(arrayAleatorio);

let mayores50 = 0;
let menores40 = 0;

for (let numeroEnArray in arrayAleatorio) {
    if (arrayAleatorio[numeroEnArray] > 50) {
        mayores50++;
    } else if (arrayAleatorio[numeroEnArray] < 40) {
        menores40++;
    }
}

alert("El número de números mayores de 50 es: " + mayores50);
alert("El número de números menores de 40 es: " + menores40);


let numeroMenor = arrayAleatorio[0];
let numeroMayor = arrayAleatorio[0];
let sumaNumeros = 0;

for (let i = 0; i < arrayAleatorio.length; i++) {
    let numeroActual = arrayAleatorio[i];
    sumaNumeros += numeroActual;

    if (numeroActual > numeroMayor) {
        numeroMayor = numeroActual;
    }

    if (numeroActual < numeroMenor){
        numeroMenor = numeroActual;
    }
    
}

let media = (sumaNumeros / 50);
alert("El número mayor del array es: " + numeroMayor);
alert("El número menor del array es: " + numeroMenor);
alert("La media del array es de: " + media);