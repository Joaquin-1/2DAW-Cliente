/**
 * EJERCICIO: u2e3_comparacion
 */

let op1 = 10 == 10                // True. Son iguales
let op2 = 10 === 10               // True. Son identicos
let op3 = 10 === 10.0             // True. Son identicos al convertirse en float
let op4 = "Laura" == "laura"      // False. Distingue entre mayuscula y minuscula
let op5 = "Laura" > "laura"       // False. Está ordenado por código ASCII, "L" es menor
let op6 = "Laura" < "laura"       // True.Como el anterior pero "l" es mayor
let op7 = "123" == 123            // True. Al convetirse a cadena son iguales
let op8 = "123" === 123           // False. Al ser distinto tipos, no son identicos.
let op9 = parseInt("123") === 123 // True. Al hacer la conversión son identicos.


function mostrarResultado() {
    /**
    * Función que muestra alerts por cada variable creada 
    * anteriormente, junto al resultado de la comparación (true o false).
    */

    alert("La 1º operación 10 == 10 es " + op1)                // true
    alert("La 2º operación 10 === 10 es " + op2)               // true
    alert("La 3º operación 10 === 10.0 es " + op3)             // true
    alert('La 4º operación "Laura" == "laura" es ' + op4)      // false
    alert('La 5º operación "Laura" > "laura" es ' + op5)       // false
    alert('La 6º operación "Laura" < "laura" es ' + op6)       // true
    alert('La 7º operación "123" == 123 es ' + op7)            // true
    alert('La 8º operación "123" === 123 es ' + op8)           // false
    alert('La 9º operación parseInt("123") === 123 es ' + op9) // true
}

