// Declaración de variables

let setting = document.getElementById("setting");
let pomodoro = document.getElementById("pomodoro");
let sbreak = document.getElementById("sbreak");
let lbreak = document.getElementById("lbreak");
let btnStart = document.getElementById("btn-start");
let contador = document.getElementById("contador");
let section = document.getElementsByTagName("section")[0];
let segundos = 1500000;
let relojPeriodico;

// Eventos
setting.addEventListener("click", function () { alert("Setting no implementado."); }, false);

pomodoro.addEventListener("click", modoPomodoro, false);
sbreak.addEventListener("click", modoSBreak, false);
lbreak.addEventListener("click", modoLBreak, false);

btnStart.addEventListener("click", iniciar, false);


function modoPomodoro() {
    /*Función que modifica el estilo del botón seleccionado actual*/
    window.clearInterval(relojPeriodico);
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

// PARA HACER ...

function iniciar() {
    if (btnStart.innerHTML == "START") {
        btnStart.innerHTML = "STOP";
        
        if (segundos >= 0) {
            relojPeriodico = setInterval(reloj, 1000);
        }

    } else {
        btnStart.innerHTML = "START";
        window.clearInterval(relojPeriodico);
      
    }

}

// TIEMPOS EN MS:
// pomodoro: 25 min = 1000 * 60 * 25 = 1500000 ms
// short break: 5 min = 1000 * 60 * 3 = 300000 ms
// long break: 15 min = 1000 * 60  * 15 = 900000 ms


function reloj() {
    /*Función que crea un reloj y muestra la hora en el title del document.*/
    // 25 minutos en ms
    let seg = segundos;
    seg = seg - 1000;
    segundos = seg;
    if (seg >= 0){
    let clk = new Date(seg);
    let min = clk.getMinutes();
    let sec = clk.getSeconds();

    contador.innerHTML = ((min < 10) ? "0" + min : min) + ":" + ((sec < 10) ? "0" + sec : sec);
    console.log(seg);
    }
    
}