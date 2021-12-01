/**
 * EJERCICIO: u2e6_for2
 */

function generarHoras(inicio, fin) {
    /**
     * Función que genera un listado de horas desde las 9:00 hasta las 21:00,
     * en intervalos de 5 minutos.
     */
    let hora;
    let minutos;
    /* Hacemos conversión a String de las variables, y utilzamos la 
    función padStart para rellenar con "0" para obtener los dos dígitos.*/
    for (let i = inicio; i < fin; i++) {
        for (let j = 0; j <= 55; j += 5) {
            hora = String(i).padStart(2, 0);
            minutos = String(j).padStart(2, 0);
            document.write(`<p>${hora}:${minutos}</p>`);
        }
    }
    document.write(`<p>${fin}:00</p>`); // Para mostrar la última hora.
}
