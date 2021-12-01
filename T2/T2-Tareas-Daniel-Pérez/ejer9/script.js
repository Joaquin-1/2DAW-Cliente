/**
 * EJERCICIO: u2e9_switch
 */

function calcularEdad() {
    /**
     * Función que pide al usuario que introduzca una edad, y una vez introducida,
     *  le devuelve una respuesta con el rango de edad al que pertenece.
     */

    let mensaje;
    let respuesta = prompt("Introduce la edad");

    switch (true) {
        case respuesta == "" || respuesta == null:
            mensaje = "Introduce un número.";
            break;

        case respuesta < 0:
            mensaje = "No puede ser negativo."
            break;

        case respuesta < 12:
            mensaje = "0-12: Niño";
            break;

        case respuesta < 26:
            mensaje = "12-26: Joven";
            break;

        case respuesta < 60:
            mensaje = "26-60: Adulto";
            break;

        case respuesta >= 60:
            mensaje = ">60: Jubilado";
            break;

        default:
            mensaje = "Edad introducida incorrecta.";

    }

    alert(mensaje);

}


