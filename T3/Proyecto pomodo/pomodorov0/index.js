/* --- Declaración de variables --- */
//Botón setting
let setting = document.getElementById("setting");

//Inputs de setting
let inputpomodoro = document.getElementById("inputpomodoro");
let inputsbreak = document.getElementById("inputsbreak");
let inputlbreak = document.getElementById("inputlbreak");

let divsetting = document.getElementById("divsetting");
let salirsetting = document.getElementById("salirsetting");

//Botones nav
let pomodoro = document.getElementById("pomodoro");
let sbreak = document.getElementById("sbreak");
let lbreak = document.getElementById("lbreak");

//Contador central
let contador = document.getElementById("contador");

//Botón START
let btnStart = document.getElementById("btn-start");

//Variables auxiliares
let section = document.getElementsByTagName("section")[0];
let segundos = 1500000;
let relojPeriodico;
let cambio;

/**
 * TIEMPOS EN MS POR DEFECTO:
 * pomodoro: 25 min = 1000 * 60 * 25 = 1500000 ms
 * short break: 5 min = 1000 * 60 * 3 = 300000 ms
 * long break: 15 min = 1000 * 60  * 15 = 900000 ms
 * 
 * pomodoro -> sbreak -> pomodoro -> lbreak (Repeticiones)
 */

/* --- Lista de eventos --- */
//Botón setting
setting.addEventListener("click", crearsetting);

//Botones nav
pomodoro.addEventListener("click", modoPomodoro);
sbreak.addEventListener("click", modoSBreak);
lbreak.addEventListener("click", modoLBreak);

//Botón START
btnStart.addEventListener("click", iniciar);


/* --- PARTE SETTING --- */

//Crear menú setting
function crearsetting() {
    //Comprobar que existe el divsetting
    if (document.getElementById("divsetting")) {
        return "";
    }

    //Crear el div padre
    let divmain;
    divmain = document.createElement("div");
    divmain.id = "divsetting";
    divmain.style = `background-color:white; color: black;
                 width:420px; padding:20px; 
                 position:absolute;top:80px;
                 border:3px solid gray; border-radius:20px`;

    document.body.appendChild(divmain);
    //Crear los div hijos
    let divhijos = `<div class="centrar bordeinferior">
                        <div><span>TIMER SETTING</span></div>
                        <div><button id="salirsetting" onclick="salir()">X</button></div>
                    </div>
                    <div><span>Time (minutes)</span></div>
                    <div class="bordeinferior">
                        <div class="centrar"><label>Pomodoro</label><input id="inputpomodoro" type="number" min="0" step="1" value="20"></div>
                        <div class="centrar"><label>Short Break</label><input id="inputsbreak" type="number" min="0" step="1" value="5"></div>
                        <div class="centrar"><label>Long Break</label><input id="inputlbreak" type="number" min="0" step="1" value="15"></div>
                    </div>
                    <div class="centrar">
                        <div><span>Long Break interval</span></div>
                        <div><input id="bucles" type="number" min="1" step="1" width="70" value="4"></div>
                    </div>`;

    //Poner los hijos en el div padre
    document.getElementById("divsetting").innerHTML = divhijos;
}

// Modificar los tiempos con setting
function modificarsetting() {
    let ms = 1000 * 60 * document.getElementById("inputpomodoro").value;
    segundos = ms;
    let d = new Date(ms);
    let min = d.getMinutes();
    let sec = d.getSeconds();

    contador.innerHTML = ((min < 10) ? "0" + min : min) + ":" + ((sec < 10) ? "0" + sec : sec);
}

//Función para salir de setting
function salir() {
    modificarsetting();
    document.body.removeChild(document.getElementById("divsetting"));
}


/* --- PARTE NAV --- */

function modoPomodoro() {
    /*Función que modifica el estilo del botón seleccionado actual*/
    window.clearInterval(relojPeriodico);
    window.clearInterval(cambio);
    btnStart.innerHTML = "START";
    sbreak.classList.remove('selected');
    lbreak.classList.remove('selected');

    pomodoro.classList.add('selected');
    contador.innerHTML = "25:00";
    segundos = 1500000;

    document.body.style['transition'] = "background-color 1s";
    document.body.style['background'] = "rgb(217, 85, 80)";
    section.style['transition'] = "background-color 1s";
    section.style['background'] = "#dd6662";
}

function modoSBreak() {
    /*Función que modifica el estilo del botón seleccionado actual*/
    window.clearInterval(relojPeriodico);
    window.clearInterval(cambio);
    btnStart.innerHTML = "START";
    pomodoro.classList.remove('selected');
    lbreak.classList.remove('selected');

    sbreak.classList.add('selected');
    contador.innerHTML = "05:00";
    segundos = 300000;

    document.body.style['transition'] = "background-color 1s";
    document.body.style['background'] = "#4c9195";
    section.style['transition'] = "background-color 1s";
    section.style['background'] = "#5e9ca0";
}

function modoLBreak() {
    /*Función que modifica el estilo del botón seleccionado actual*/
    window.clearInterval(relojPeriodico);
    window.clearInterval(cambio);
    btnStart.innerHTML = "START";
    pomodoro.classList.remove('selected');
    sbreak.classList.remove('selected');

    lbreak.classList.add('selected');
    contador.innerHTML = "15:00";
    segundos = 900000;

    document.body.style['transition'] = "background-color 1s";
    document.body.style['background'] = "#457ca3";
    section.style['transition'] = "background-color 1s";
    section.style['background'] = "#5889ac";
}


//Botón START
function iniciar() {
    if (btnStart.innerHTML == "START") {
        btnStart.innerHTML = "STOP";

        if (segundos >= 0) {
            relojPeriodico = setInterval(reloj, 1000);
        }

        function cambiar() {
            if (segundos == 0) {
                modoSBreak();
            }
        }
        cambio = setInterval(cambiar, 1000);

    } else {
        btnStart.innerHTML = "START";
        window.clearInterval(relojPeriodico);
    }
}

function reloj() {
    /*Función que crea un reloj y muestra la hora en el title del document.*/
    let seg = segundos;
    seg = seg - 1000;
    segundos = seg;
    if (seg >= 0) {
        let clk = new Date(seg);
        let min = clk.getMinutes();
        let sec = clk.getSeconds();

        contador.innerHTML = ((min < 10) ? "0" + min : min) + ":" + ((sec < 10) ? "0" + sec : sec);
        console.log(seg);
    }

}

