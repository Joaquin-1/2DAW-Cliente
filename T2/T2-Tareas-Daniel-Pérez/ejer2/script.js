/**
 * EJERCICIO: u2e2_cadenas
 */

let nombre = "Daniel";
let apellido = "Pérez";
let edad = 26;
let anyo_nac = 1995;

function mostrar() {
    /**
     * Función que muestra alerts con el valor de las variables. 
     */
    
    alert("Esto es una comilla simple \' <---"); // Muestra en un alert una frase que incluya comillas simples.
    alert(nombre + "\n" + apellido);             // Muestra en un alert tu nombre y apellidos separados por un salto de línea.
    alert(edad + anyo_nac);                      // Muestra en un alert la suma de las variables edad y año de nacimiento.
    alert(nombre + apellido + edad + anyo_nac);  // Muestra en un alert la suma de todas las variables.
}