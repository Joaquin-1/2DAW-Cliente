function cambiarImagen() {
    const imagen = document.getElementById("miImagen");
    const titulo = document.getElementById("tituloImagen");

    if (imagen.src.match("imagen1")) {
        imagen.src = "images/imagen2.jpg";
        titulo.innerHTML = "Imagen 2";

    } else if (imagen.src.match("imagen2")) {
        imagen.src = "images/imagen3.jpg";
        titulo.innerHTML = "Imagen 3";

    } else if (imagen.src.match("imagen3")) {
        imagen.src = "images/imagen4.jpg";
        titulo.innerHTML = "Imagen 4";

    } else if (imagen.src.match("imagen4")) {
        imagen.src = "images/imagen5.jpg";
        titulo.innerHTML = "Imagen 5";

    } else {
        imagen.src = "images/imagen1.jpg";
        titulo.innerHTML = "Imagen 1";
    }

}