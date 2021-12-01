//Declaración de variables
let btnSalir = document.getElementById("salirsetting");
let btnConfirmar = document.getElementById("btn-confirmar");
let inputpomodoro = document.getElementById("inputpomodoro");
let inputsbreak = document.getElementById("inputsbreak");
let inputlbreak = document.getElementById("inputlbreak");
let inputbucles = document.getElementById("inputbucles");

//Event Listeners
btnSalir.addEventListener("click", salir);
btnConfirmar.addEventListener("click", confirmar);

//Botón X setting
function salir() {
    window.close();
    opener.location.reload();
}

//Crear cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires =" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + "; path = /";
}

//Obtener valor cookie
function getCookie(cname) {
    let name = cname + "=";
    let ca = opener.document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

//Modificar cookies
function confirmar() {
    let confirmar = confirm("¿Quieres confirmar los ajustes?");
    if (confirmar) {  
        setCookie("inputpomodoro", inputpomodoro.value, 365);
        setCookie("inputsbreak", inputsbreak.value, 365);
        setCookie("inputlbreak", inputlbreak.value, 365);
        setCookie("inputbucles", inputbucles.value, 365);
        alert("Se han guardado los ajustes.");
        salir();
    } else {
        alert("No se han producido cambios")
    }
}

//Actualizar el valor de los input de settings con las cookies.
inputpomodoro.value = parseInt(getCookie("inputpomodoro"));
inputsbreak.value = parseInt(getCookie("inputsbreak"));
inputlbreak.value = parseInt(getCookie("inputlbreak"));
inputbucles.value = parseInt(getCookie("inputbucles"));