/* Ejercicio 1 */
/*let numeracion = {
    1: "primero",
    2: "segundo",
    3: "tercero",
    4: "cuarto",
    5: "quinto",
    6: "sexto",
    7: "septimo",
    8: "octavo",
    9: "noveno",
    10: "decimo"
}

let numeroAIntroducir;

do {
    numeroAIntroducir = prompt("Introduce un número ordinal del 1 al 10:"));

    /*Si es un numero se ejecuta el bucle, si no salta una advertencia */
    /*if (Number(numeroAIntroducir)) {
        for (let i in numeracion) {
            if (numeroAIntroducir == i) {
                alert(numeracion[i]);
            }
        }
    } else {
        alert("Debes introducir un número")
    }
} while (numeroAIntroducir >= 1 && numeroAIntroducir <= 10);
*/

/*Ejercicio 2 */

  // Solicitamos al usuario ingresar el primer número decimal

/*   let a, b;
  [a,b]

  do {
    a = prompt("Ingrese el primer número decimal:");
    a = parseInt(a);

    // Verificamos si el valor es un número válido
    if (isNaN(a)) {
      alert("Por favor, ingrese un número válido.");
    }
  } while (isNaN(a));

  do {
    b = prompt("Ingrese el segundo número decimal:");
    b = parseInt(b);

    // Verificamos si el valor es un número válido
    if (isNaN(b)) {
      alert("Por favor, ingrese un número válido.");
    }
  } while (isNaN(b));

  let suma = a + b;

  // Convertimos el resultado a binario y hexadecimal
  let sumaBinario = suma.toString(2);
  let sumaHexadecimal = suma.toString(16);

  // Mostramos los resultados
  alert(`Resultado de la suma:
    Decimal: ${suma}
    Binario: ${sumaBinario}
    Hexadecimal: ${sumaHexadecimal}`); */

/*Ejercicio 3 */


let entrada1 = "AJjads 2h3iShJasrn aSfd 1f3t f 983d "
let entrada2 = "ads"

if(entrada1.substring(entrada2)){
    alert("La segunda cadena es subcadena de la primera")
} else {
    alert("La segunda cadena no es subcadena de la primera")
}

alert("La cadena 1 tiene " + entrada1.length + " carácteres " + " y la segunda tiene " + entrada2.length + " carácteres");

let vocales = ['a', 'e', 'i', 'o', 'u'];

for (let vocal of vocales) {
    entrada1 = entrada1.split(vocal).join(vocal.toUpperCase());
}

if (entrada1.length > 5) {
    alert(entrada1.substring(0, 5) + "...");
} else {
    alert(entrada1);
}
