import { pi, areaCirculo, perimetroCirculo } from './geometria.js';


let boton1 = document.getElementById("boton1");
boton1.addEventListener("click", areaCirculo, false);

let boton2 = document.getElementById("boton2");
boton2.addEventListener("click", perimetroCirculo, false);




console.log(areaCirculo);
console.log(pi);  
