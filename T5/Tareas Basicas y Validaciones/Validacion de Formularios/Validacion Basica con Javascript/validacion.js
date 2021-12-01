//Selección de formulario.

//Conociendo el ID del formulario[form]
var formulario = document.getElementById("miFormulario");
var formulario2 = document.forms["miFormulario"];

//Conociendo el numero de formulario que es en la página
var formulario3 = document.getElementsByTagName("form")[0];
var formulario4 = document.forms[0];

//SELECCIONAR ELEMENTOS DE UN FORMULARIO
//.elements[] Devuelve un array con todos los input del formulario
//getElementById("miElemento") Devuelve un elemento con un id determinado
//getElementsByTagName("etiqueta") Devuelve un array con un elemento de un tipo de etiqueta (input, select, etc.)
//getElementsByName("nombre") Devuelve un array con elementos que tienen el mismo nombre (por ejemplo radiobutton).

window.onload = iniciar; //Sin parentesis

//Esta función asocia un evento a la pulsación del botón enviar.
function iniciar() {
    document.getElementById("enviar").addEventListener("click", validar, false);
}

function validaNombre(){
    var elemento = document.getElementById("nombre");
    limpiarError(elemento);
    if (elemento.value == ""){
        alert("El campo no puede ser vacio");
        error(elemento);
        return false;
    }
    return true;
}

function validaTelefono(){
    var elemento = document.getElementById("telefono");
    limpiarError(elemento);
    if (isNaN(elemento.value)){
        alert("El campo teléfono tiene que ser numérico");
        error(elemento);
        return false;
    }
    return true;
}

function validaFecha(){
    var dia = document.getElementById("dia").value;
    var mes = document.getElementById("mes").value;
    var ano = document.getElementById("ano").value;

    var fecha = new Date(ano, mes, dia);

    if (isNaN(fecha)){
        alert("Los campos fecha son incorrectos");
        return false;
    }
    return true;
    
}

function validaCheck() {
    var campoCheck = document.getElementById("mayor");
    if( !campoCheck.checked) {
        alert("Debes ser mayor de edad")
        return false;
    }
    return true;
}

//La "e" hace referencia al evento que ha dado lugar a la acción
function validar(e) {
    if (validaNombre() && validaTelefono() && validaFecha() && validaCheck() && confirm("Pulsa para enviar el formulario")) {
        return true;
    } else {
        //Previene que el formulario te lleve a la página "procesar.php"
        e.preventDefault();
        return false;
    }
}

function error(elemento){
    elemento.className = "error";
    elemento.focus();
}

function limpiarError(elemento){
    elemento.className = ""
}