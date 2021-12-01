function calcular() {
    /**
     * Función que realiza varías acciones sobre un conjunto de usuarios: Según la opción
     * que haya introducido el usuario en el input, realizará una acción determinada.
     */
    let usuarios = [

        {
            nombre: "Juan",
            apellidos: "Pérez Pérez",
            edad: 20,
            casado: true
        },

        {
            nombre: "Laura",
            apellidos: "López López",
            edad: 21,
            casado: false
        },

        {
            nombre: "Ana",
            apellidos: "Sánchez Sánchez",
            edad: 24,
            casado: true
        },

        {
            nombre: "Miguel",
            apellidos: "Fernández Fernández",
            edad: 26,
            casado: false
        },

        {
            nombre: "Lola",
            apellidos: "García García",
            edad: 20,
            casado: true
        },

        {
            nombre: "Francisco",
            apellidos: "Jiménez Jiménez",
            edad: 15,
            casado: false
        }

    ];
    let respuesta = document.getElementById("respuesta");
    respuesta.innerHTML = "";   // Limpiar el parrafo de respuesta al introducir una opción.
    let opcion = document.getElementById("opcion");
    let opc = parseInt(opcion.value);


    switch (opc) {
        case 1:
            for (let indice in usuarios) {
                respuesta.innerHTML += `<p>Los datos del usuario ${parseInt(indice) + 1} son:`;
                respuesta.innerHTML += "<ul>";
                for (let prop in usuarios[indice]) {
                    respuesta.innerHTML += `<li>${prop}: ${usuarios[indice][prop]}</li>`;

                }
                respuesta.innerHTML += "</ul>";
            }
            break;

        case 2:
            let sumEdad = 0;
            for (let usuario of usuarios) {
                sumEdad += usuario['edad'];

            }
            console.log("Número de usuarios: " + usuarios.length);
            console.log("sumEdad: " + sumEdad);
            console.log("sumEdad/usuarios.length: " + sumEdad / usuarios.length);
            respuesta.innerHTML += "La edad media de todos los usuarios es " + (sumEdad / usuarios.length);
            break;

        case 3:
            let casados = 0;
            for (let usuario of usuarios) {
                if (usuario['casado']) {
                    casados++
                }
            }
            console.log("Número de casados: " + casados);
            
            respuesta.innerHTML += "<p>El número de usuari@s casad@s es " + casados + "</p>";
            break;

        case 4:
            let sumEdadCasados = 0;
            let sumEdadSolteros = 0;
            let numCasados = 0;
            let numSolteros = 0;


            for (let usuario of usuarios) {
                if (usuario['casado']) {
                    sumEdadCasados += usuario['edad'];
                    numCasados++;
                } else {
                    sumEdadSolteros += usuario['edad'];
                    numSolteros++;
                }

            }

            console.log("Suma total de edad de usuarios casados: " + sumEdadCasados);
            console.log("Suma total de edad de usuarios solteros: " + sumEdadSolteros);

            console.log("Número de usuarios casados: " + numCasados);
            console.log("Número de usuarios solteros: " + numSolteros);
            
            let mediaCasados = (sumEdadCasados / numCasados).toFixed(1);    // Solo aparece con 1 decimal
            let mediaSolteros = (sumEdadSolteros / numSolteros).toFixed(1);

            respuesta.innerHTML += "<p>La edad media de usuari@s casad@s es " + mediaCasados + "</p>";
            respuesta.innerHTML += "<p>La edad media de usuari@s solter@s es " + mediaSolteros + "</p>";
            break;

        default:
            alert("Número introducido incorrecto.")
    }

}