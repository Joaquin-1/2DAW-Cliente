function generarAsesino(min, max) {
    /**
     * Función que genera un número aleatorio, que será utilizado para saber 
     * quien es el asesino. 
     */
    return parseInt((Math.random() * (max + 1 - min) + min));
}

const ASESINO = generarAsesino(1, 4);
var vidas = 3;

function resolver() {
    /**
     * Función que resuelve el caso, según las opciones elegidas por el usuario.
     * Si acierta, se mostrará un mensaje de como se produjo el asesinato.
     * Si falla, mostrará un mensaje al usuario para que siga intentandolo.
     * Cada intento fallido, pierde 1 vida, y al perder todas las vidas, termina el juego.
     */

    let habitacion = document.getElementById("habitacion");
    let sospechoso = document.getElementById("sospechoso");
    let respuesta = document.getElementById("respuesta");
    let botonRes = document.getElementById("boton-res");

    let resuelto = false;
    let arma = "";
    let asesino = ASESINO;

    if (habitacion.value == "salón de baile" && sospechoso.value == "Kalehoff" && asesino == 1) {
        arma = "veneno";
        resuelto = true;
    } else if (habitacion.value == "galería" && sospechoso.value == "Van Cleve" && asesino == 2) {
        arma = "trofeo";
        resuelto = true;
    } else if (habitacion.value == "sala de billar" && sospechoso.value == "Sparr" && asesino == 3) {
        arma = "palo de billar";
        resuelto = true;
    } else if (habitacion.value == "comedor" && sospechoso.value == "Parkes" && asesino == 4) {
        arma = "cuchillo";
        resuelto = true;
    }

    if (resuelto == true) {
        respuesta.innerHTML = sospechoso.value + " lo hizo en el " + habitacion.value + " con el " + arma + "!";
        respuesta.style.color = "red";  // Cambia el parrafo de color
        habitacion.disabled = true; // disabled --> Desactiva los botones
        sospechoso.disabled = true;
        botonRes.disabled = true;

    } else {
        respuesta.innerHTML = "El caso sigue sin resolverse. Sigue intentando.";

        if (vidas > 1) {
            vidas--;
            document.getElementById("vidas").innerHTML = "&hearts;".repeat(vidas);
        } else {
            habitacion.disabled = true; // disabled --> Desactiva los botones
            sospechoso.disabled = true;
            botonRes.disabled = true;
            document.getElementById("vidas").innerHTML = ""; // Borra el contenido actual del parrafo.
            document.getElementById("descripcionHabitacion").innerHTML = "";
            document.getElementById("descripcionSospechoso").innerHTML = "";
            respuesta.innerHTML = "GAME OVER";
            respuesta.style.color = "red";
        }
    }


}

function describirHabitacion() {
    /**
     * Función que describe una habitación al elegirlo de la lista desplegable.
     * Dependiendo del asesinato, el arma aparecerá en una de las habitaciones. 
     */

    let asesino = ASESINO;
    let habitacion = document.getElementById("habitacion");
    let descripcion = document.getElementById("descripcionHabitacion");
    let desc;

    if (habitacion.value == "salón de baile") {
        desc = "Vas al salón de baile. "
    } else if (habitacion.value == "galería") {
        desc = "Vas a la galería. "
    } else if (habitacion.value == "sala de billar") {
        desc = "Vas a la sala de billar.  "
    } else if (habitacion.value == "comedor") {
        desc = "Vas al comedor. "
    }

    if (asesino == 1 && habitacion.value == "salón de baile") {
        desc += "Buscas por la sala, y encuentras un veneno.";
    } else if (asesino == 2 && habitacion.value == "galería") {
        desc += "Buscas por la sala, y encuentras un trofeo.";
    } else if (asesino == 3 && habitacion.value == "sala de billar") {
        desc += "Buscas por la sala, y encuentras un palo de billar.";
    } else if (asesino == 4 && habitacion.value == "comedor") {
        desc += "Buscas por la sala, y encuentras un cuchillo.";
    } else if (habitacion.value == "habitaciones") {
        desc = "";
    }
    else {
        desc += "Buscas por la sala, pero no encuentras nada extraño.";
    }

    descripcion.innerHTML = desc;   // Muestra la descripción final de la habitación.

    document.getElementById("respuesta").innerHTML = "";    // Borra la respuesta generada por la función resolver.
}

function describirSospechoso() {
    /**
     * Función que describe un sospechoso al elegirlo de la lista desplegable.
     */

    let sospechoso = document.getElementById("sospechoso");
    let descripcion = document.getElementById("descripcionSospechoso");

    if (sospechoso.value == "Parkes") {
        descripcion.innerHTML = "Parkes estaba en el comedor."
    } else if (sospechoso.value == "Van Cleve") {
        descripcion.innerHTML = "Van Cleve estaba en la galería."
    } else if (sospechoso.value == "Sparr") {
        descripcion.innerHTML = "Sparr estaba en la sala de billar."
    } else if (sospechoso.value == "Kalehoff") {
        descripcion.innerHTML = "Kalehoff estaba en el salón de baile."
    } else {
        descripcion.innerHTML = "";
    }
    document.getElementById("respuesta").innerHTML = "";  // Borra la respuesta generada por la función resolver.
}