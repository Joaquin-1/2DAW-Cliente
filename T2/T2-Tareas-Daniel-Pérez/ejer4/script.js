/**
 * EJERCICIO: u2e4_ifelse
 */

function calcularEdad() {
    /**
     * Función que pide al usuario que introduzca una edad, y una vez introducida,
     *  le devuelve una respuesta con el rango de edad al que pertenece.
     */

    let mensaje;
    let respuesta = prompt("Introduce la edad");

    if (respuesta < 0 || respuesta == "" || respuesta == null) {
        mensaje = "La edad tiene que ser mayor o igual a 0."

    } else if (respuesta >= 0 && respuesta < 12) {
        mensaje = "0-12: Niño";

    }else if (respuesta >= 12 && respuesta < 26) {
        mensaje = "12-26: Joven";

    } else if (respuesta >= 26 && respuesta < 60) {
        mensaje = "26-60: Adulto";

    } else if (respuesta >= 60) {
        mensaje = ">60: Jubilado";

    } else {
        mensaje = "Edad introducida incorrecta."
    }

    alert(mensaje)
}


