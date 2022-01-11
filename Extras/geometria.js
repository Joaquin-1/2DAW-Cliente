const pi = 3.14;


function areaCirculo() {

    let area = pi * (radio.value * radio.value);
    console.log(area);
    
}


function perimetroCirculo() {

    let perimetro = 2 * pi * radio.value
    console.log(perimetro)
}

export { pi, areaCirculo, perimetroCirculo };
