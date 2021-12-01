/**
 * Conversiones de tipos - Daniel Pérez.
 * Este script, ejecuta varias operaciones, cuyo resultado se mostrará en la página
 * html. Además también añadirá algunas explicaciones sobre el resultado obtenido.
 * p1 = Operación
 * r1 = Respuesta
 */

// Conversiones de tipos
document.getElementById("p1").innerHTML = typeof NaN;
document.getElementById("r1").innerHTML = "Es de la clase NaN, porque intenta hacer la conversión a número";

document.getElementById("p2").innerHTML = 9999999999999999;
document.getElementById("r2").innerHTML = "En JS tiene un máximo de longitud para representar números con precisión, y a veces redondea"

document.getElementById("p3").innerHTML = 0.1 + 0.2 == 0.3;
document.getElementById("r3").innerHTML = "JS tiene problemas con los números flotantes y no tiene tanta precisión al representarlos"

document.getElementById("p4").innerHTML = true == 1;
document.getElementById("r4").innerHTML = "True en JS tambien puede significar 1, así que por eso son iguales"

document.getElementById("p5").innerHTML = true === 1;
document.getElementById("r5").innerHTML = "Aunque sean iguales, no son exactamente identicos."

document.getElementById("p6").innerHTML = 9 + "1";
document.getElementById("r6").innerHTML = "El operador + concatena si uno de los dos son de tipo string"

document.getElementById("p7").innerHTML = 91 - "1";
document.getElementById("r7").innerHTML = "El operador - no concatena, sino que intenta hacer la conversión a number y realiza la operación"

document.getElementById("p8").innerHTML = [] == 0
document.getElementById("r8").innerHTML = "[] se interpreta como false, que también es lo mismo que 0, así que 0 == 0 es true"

document.getElementById("p9").innerHTML = true - true
document.getElementById("r9").innerHTML = "true es también 1, así que 1 - 1 = 0"

document.getElementById("p10").innerHTML = true + true + true === 3
document.getElementById("r10").innerHTML = "Como true es también 1, sería como hacer 1+1+1==3, y por tanto es igual."

document.getElementById("p11").innerHTML = 0.5 + 0.1 == 0.6
document.getElementById("r11").innerHTML = "Aunque JS tiene problemas con los números flotantes, algunas operaciones se calculan sin problema."

document.getElementById("p12").innerHTML = [] + []
document.getElementById("r12").innerHTML = "Al concatenar, se convierten en cadena vacía, y al concatenarse 2 cadenas vacías, el resultado es cadena vacía."

// Otros ejemplos
document.getElementById("p13").innerHTML = "hola" + 1
document.getElementById("r13").innerHTML = "El operador + hace que el 1 se convierta en string y se concatene con hola"

document.getElementById("p14").innerHTML = "hola" - 1 // Devuelve NaN
console.log("hola" - 1)
document.getElementById("p14").innerHTML = "Al realizar la conversión a number, como no es posible, devuelve un NaN"