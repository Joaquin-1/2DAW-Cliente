/**
 * EJERCICIO: u2e5_for
 */

function generarHoras() {
    /**
     * Función que genera un listado de horas desde las 9:00 hasta las 21:30.
     */
    let media = false;

    /*En el incremento ponemos un operador condicional ternario, 
    que incremente el valor de i, si cumple la condición de que media es false.*/

    for (i = 9; i <= 21; media ? i : i++) {

       if (media) {
            document.write(`<p>${i}:30</p>`);
        }
        else {
            document.write(`<p>${i}:00</p>`);
            
        } 
        media = !media; // Cada iteración invertimos el estado del media.
    }
}

