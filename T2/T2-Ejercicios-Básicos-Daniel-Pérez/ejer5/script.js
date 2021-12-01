function mostrar1() {
    /**
     * Función que muestra los digitos que compone un número introducido por
     * el usuario, utilizando un bucle for.
     */
    let num = document.getElementById("numero");
    num = parseInt(num.value);

    if (num >= 0 && num < 1000) {
        num = String(num);
        for (let i = 0; i < num.length; i++) {
            alert(num[i]);
        }

    } else {
        alert("Número introducido incorrecto.")
    }

}

function mostrar2() {
    /**
     * Función que muestra los digitos que compone un número introducido por
     * el usuario, utilizando un bucle for ... in.
     */
    let num = document.getElementById("numero");
    num = parseInt(num.value);

    if (num >= 0 && num < 1000) {
        num = String(num);
        for (let indice in num) {
            alert(num[indice]);
        }

    } else {
        alert("Número introducido incorrecto.")
    }

}

function mostrar3() {
    /**
     * Función que muestra los digitos que compone un número introducido por
     * el usuario, utilizando un bucle for ... of.
     */
    let num = document.getElementById("numero");
    num = parseInt(num.value);

    if (num >= 0 && num < 1000) {
        num = String(num);
        for (let digito of num) {
            alert(digito);
        }
        
    } else {
        alert("Número introducido incorrecto.")
    }

}