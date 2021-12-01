/**
 * EJERCICIO: u2e7_while
 */

function control() {
    /**
    * Función que muestra un mensaje al usuario para que escriba el nombre requerido.
    * Hasta que no escriba el nombre correctamente, seguirá preguntando hasta que acierte.
    */

    let mensaje;
    let respuesta;

    while (respuesta != "Suárez") {
        respuesta = prompt("Escribe el apellido del primer presidente de la democracia");
        if (respuesta == "Suárez") {
            mensaje = "¡CORRECTO!"
        }
    }

}

control();