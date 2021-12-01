/**
 * EJERCICIO: u2e8_while2
 */

function control() {
    /**
    * Función que muestra un mensaje al usuario para que escriba el nombre requerido.
    * Hasta que no escriba el nombre correctamente, seguirá preguntando hasta que acierte.
    * Si conoce solo el nombre o el apellido, saldrá un mensaje distinto.
    */
    let respuesta = "";
    let mensaje = "";

    while (respuesta != "Adolfo Suárez") {

        respuesta = prompt("¿Cuál fue el primer presidente de la democracia española?");
    
        if (respuesta == "Adolfo Suárez") {
            mensaje = "¡CORRECTO!";
        } else if (respuesta == "Adolfo") {
            mensaje = "Te falta el apellido";
        } else if (respuesta == "Suárez") {
            mensaje = "Te falta el nombre";
        } else {
            mensaje = "ERROR. Inténtalo de nuevo."
        }

        alert(mensaje);
    }
}

control();