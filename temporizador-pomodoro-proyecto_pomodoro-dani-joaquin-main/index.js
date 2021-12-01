/* --- Declaración de variables --- */
//Botón setting
let btnsetting = document.getElementById("btn-setting");

//Inputs de setting
let inputpomodoro = document.getElementById("inputpomodoro");
let inputsbreak = document.getElementById("inputsbreak");
let inputlbreak = document.getElementById("inputlbreak");

//Botones nav
let btnpomodoro = document.getElementById("btn-pomodoro");
let btnsbreak = document.getElementById("btn-sbreak");
let btnlbreak = document.getElementById("btn-lbreak");

//Contador central
let contador = document.getElementById("contador");

//Botón START
let btnStart = document.getElementById("btn-start");

//Variables auxiliares
let section = document.getElementsByTagName("section")[0];
let tiempofinal = document.getElementById("tiempofinal");
let relojPeriodico;
let cambio;


/**
 * TIEMPOS EN MS POR DEFECTO:
 * pomodoro: 25 min = 1000 * 60 * 25 = 1500000 ms
 * short break: 5 min = 1000 * 60 * 3 = 300000 ms
 * long break: 15 min = 1000 * 60  * 15 = 900000 ms
 * 
 * pomodoro -> sbreak -> pomodoro -> sbreak -> pomodoro -> lbreak (Repeticiones)
 */

/* --- Lista de eventos --- */
//Botón setting
btnsetting.addEventListener("click", abrirsetting);

//Botones nav
btnpomodoro.addEventListener("click", modoPomodoro);
btnsbreak.addEventListener("click", modoSBreak);
btnlbreak.addEventListener("click", modoLBreak);

//Botón START
btnStart.addEventListener("click", iniciar);


//COOKIES
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires =" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + "; path = /";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
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

//Crear cookies por defecto al cargar la página por primera vez
if(document.cookie == ''){
    setCookie("inputpomodoro", 25, 365);
    setCookie("inputsbreak", 5, 365);
    setCookie("inputlbreak", 15, 365);
    setCookie("inputbucles", 4, 365);
}


/* --- PARTE SETTING --- */
let ventanaSetting;

//Ventana menú setting
function abrirsetting() {
    ventanaSetting = window.open("setting/setting.html", "_blank", "width = 500, height = 500");
    ventanaSetting.moveBy(20, 200);
}

/* --- PARTE NAV --- */
let segundos = 1000 * 60 * getCookie("inputpomodoro");

function modoPomodoro() {
    /*Función que modifica el estilo del botón seleccionado actual*/
    //Inicio CSS
    btnsbreak.classList.remove('selected');
    btnlbreak.classList.remove('selected');
    btnpomodoro.classList.add('selected');
    document.body.style['transition'] = "background-color 1s";
    document.body.style['background'] = "rgb(217, 85, 80)";
    section.style['transition'] = "background-color 1s";
    section.style['background'] = "#dd6662";
    //Fin CSS
    ponerContador(getCookie("inputpomodoro"));
    segundos = 1000 * 60 * getCookie("inputpomodoro");
    
}

function modoSBreak() {
    /*Función que modifica el estilo del botón seleccionado actual*/
    //Inicio CSS
    btnpomodoro.classList.remove('selected');
    btnlbreak.classList.remove('selected');
    btnsbreak.classList.add('selected');
    document.body.style['transition'] = "background-color 1s";
    document.body.style['background'] = "#4c9195";
    section.style['transition'] = "background-color 1s";
    section.style['background'] = "#5e9ca0";
    //Fin CSS
    ponerContador(getCookie("inputsbreak"));
    segundos = 1000 * 60 * getCookie("inputsbreak");
    
}

function modoLBreak() {
    /*Función que modifica el estilo del botón seleccionado actual*/
    //Inicio CSS
    btnpomodoro.classList.remove('selected');
    btnsbreak.classList.remove('selected');
    btnlbreak.classList.add('selected');
    document.body.style['transition'] = "background-color 1s";
    document.body.style['background'] = "#457ca3";
    section.style['transition'] = "background-color 1s";
    section.style['background'] = "#5889ac";
    //Fin CSS
    ponerContador(getCookie("inputlbreak"));
    segundos = 1000 * 60 * getCookie("inputlbreak");
    
}


//Botón START
function iniciar() {
    if (btnStart.innerHTML == "START") {
        btnStart.innerHTML = "STOP";
        
        calcularTiempoFinal();  // TIEMPO en el que acabará.
        if (segundos >= 0) {
            relojPeriodico = setInterval(reloj, 1000);
        }
        
        let bucles = parseInt(getCookie("inputbucles"));
        let contadorbucles = 0;
        let pomoContSbreak = 0;
        let sbreakContPomo = 0;
        let pomoContLbreak = 0;
        function cambiar() {
            if (segundos == 0 && pomoContSbreak == 0) {
                modoSBreak();
                pomoContSbreak = 1
                sbreakContPomo = 1;
            }
            
            if (segundos == 0 && sbreakContPomo == 1){
                modoPomodoro();
                sbreakContPomo = 2;
                pomoContLbreak = 1;
            }

            if (segundos == 0 && pomoContLbreak == 1){
                modoLBreak();
                pomoContLbreak = 2
             
            }

            if (segundos == 0 && pomoContLbreak == 2){
                modoPomodoro();
                pomoContSbreak = 0;
                sbreakContPomo = 0;
                pomoContLbreak = 0;
                contadorbucles++;
                console.log("Se ha recorrido " + contadorbucles + " bucle/s.");
            }

            if(contadorbucles == bucles){
                window.clearInterval(cambio);
                window.clearInterval(relojPeriodico);
            }

        }
        cambio = setInterval(cambiar, 1000);

    } else {
        btnStart.innerHTML = "START";
        window.clearInterval(relojPeriodico);
    }
}

function reloj() {
    /*Función que crea un reloj y muestra la hora.*/
    let seg = segundos;
    seg = seg - 1000;
    segundos = seg;
    if (seg >= 0) {
        let clk = new Date(seg);
        let hour = clk.getUTCHours();
        let min = clk.getMinutes();
        let sec = clk.getSeconds();

        contador.innerHTML = ((hour > 0) ? hour + ":" : "") + ((min < 10) ? "0" + min : min) + ":" + ((sec < 10) ? "0" + sec : sec);
    }

}

//Aparece el valor del cookie en cada modo seleccionado
function ponerContador(minutos){
    let cont = new Date(1000 * 60 * minutos);
    let hour = cont.getUTCHours();
    let min = cont.getMinutes();
    let sec = cont.getSeconds();

    contador.innerHTML = ((hour > 0) ? hour + ":" : "") + ((min < 10) ? "0" + min : min) + ":" + ((sec < 10) ? "0" + sec : sec);
    
}

ponerContador(getCookie("inputpomodoro"));


//Devuelve como resultado, la suma de un bucle por la cantidad de bucles 
// y se lo añade a la fecha actual
function calcularTiempoFinal(){
    let tpomodoro = parseInt(getCookie("inputpomodoro")) * 60 * 1000 * 2;
    let tsbreak = parseInt(getCookie("inputsbreak")) * 60 * 1000;
    let tlbreak = parseInt(getCookie("inputlbreak")) * 60 * 1000;

    let totalxbucle = tpomodoro + tsbreak + tlbreak;
    let totalbucles = parseInt(getCookie("inputbucles")) * totalxbucle;
    
    let ahora = new Date();
    let final = ahora.getTime() + totalbucles;
    let fechafinal = new Date(final);
    let horafin = fechafinal.getHours();
    let minfin = fechafinal.getMinutes();
    let secfin = fechafinal.getSeconds();
    let tiempoformateado =  ((horafin > 0) ? horafin + ":" : "") + ((minfin < 10) ? "0" + minfin : minfin) + ":" + ((secfin < 10) ? "0" + secfin : secfin);
    tiempofinal.innerHTML = "Se acabará en: " + tiempoformateado;

}
