window.onload = iniciar; //Sin parentesis

//Esta función asocia un evento a la pulsación del botón enviar.
function iniciar() {
    document.getElementById("enviar").addEventListener("click", validar, false);
}


function validaNombre(){
    var elemento = document.getElementById("nombre");
    if (!elemento.checkValidity()){
        if (elemento.validity.valueMissing){
            error2(elemento, "Debe introducir un nombre");
        }
        if (elemento.validity.patternMismatch){
            error2(elemento, "El nombre debe tener entre 2 y 15 caracteres");
        }
        //error(elemento);
        return false;
    }
    return true;
}

function validaEdad(){
    var elemento = document.getElementById("edad");
    if (!elemento.checkValidity()){     
        if (elemento.validity.valueMissing){
            error2(elemento, "Debe introducir un edad");
        }
        if (elemento.validity.rangeOverflow){
            error2(elemento, "El valor debe ser menor de 100");
        }
        if (elemento.validity.rangeUnderflow){
            error2(elemento, "El valor debe ser mayor o igual de 18");
        }
        //error(elemento);
        return false;
    }
    return true;
}

function validaTelefono(){
    var elemento = document.getElementById("telefono");
    if (!elemento.checkValidity()){
        if (elemento.validity.valueMissing){
            error2(elemento, "Debe introducir un telefono");
        }
        if (elemento.validity.patternMismatch){
            error2(elemento, "El nombre debe tener 9 numeros");
        }
       // error(elemento);
        return false;
    }
    return true;
}


function validar(e) {
    borrarError();
    if (validaNombre() && validaTelefono() && validaFecha() && validaCheck() && confirm("Pulsa para enviar el formulario")) {
        return true;
    } else {
        //Previene que el formulario te lleve a la página "procesar.php"
        e.preventDefault();
        return false;
    }
}

function error(elemento){
    document.getElementById("mensajeError").innerHTML = elemento.validationMessage;
    elemento.className="error";
    elemento.focus();
}

function error2(elemento, mensaje){
    document.getElementById("mensajeError").innerHTML = mensaje;
    elemento.className="error";
    elemento.focus();
}

function borrarError(){
    var formulario = document.forms[0];
    for (var i = 0; i < formulario.elements.length; i++){
        formulario.elements[i].className="";
    }
}