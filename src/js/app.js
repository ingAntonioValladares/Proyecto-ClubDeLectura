/*------------------ CONTENIDO MAIN ------------------*/
const main = document.createElement('MAIN');
main.classList.add('main');

const img = document.createElement('IMG');
img.setAttribute('src', 'img/lectura2.webp');
img.setAttribute('alt', 'imagen lectura');

main.appendChild(img);

const contenidoBeneficios = document.createElement('DIV');
contenidoBeneficios.classList.add('contenido-beneficios');

const titulo1 = document.createElement('H2');
titulo1.textContent = 'Lean juntos,'
const titulo2 = document.createElement('SPAN');
titulo2.textContent = 'Crezcan juntos';
titulo1.appendChild(titulo2);
contenidoBeneficios.appendChild(titulo1);
main.appendChild(contenidoBeneficios);

const descripcionBeneficios = document.createElement('UL');
descripcionBeneficios.classList.add('descripcion-beneficios');
const beneficio1 = document.createElement('LI');
beneficio1.textContent = 'Lecturas tecnológicas seleccionadas mensualmente por expertos de la industria.';

const beneficio2 = document.createElement('LI');
beneficio2.textContent = 'Reuniones virtuales y presenciales para discusiones en profundidad.';

const beneficio3 = document.createElement('LI');
beneficio3.textContent = 'Acceso anticipado a los nuevos lanzamientos de libros de tecnología.';

const beneficio4 = document.createElement('LI');
beneficio4.textContent = 'Sesiones de preguntas y respuestas con líderes en pensamiento tecnológico.';

descripcionBeneficios.appendChild(beneficio1);
descripcionBeneficios.appendChild(beneficio2);
descripcionBeneficios.appendChild(beneficio3);
descripcionBeneficios.appendChild(beneficio4);

contenidoBeneficios.appendChild(descripcionBeneficios);
// console.log(main);

const body = document.querySelector('body');
body.appendChild(main);

const section = document.querySelectorAll('section');

body.insertBefore(main, section[1]);

/*----------------- CONTENIDO TECNOLOGIAS ----------------- */
const icono = document.querySelectorAll('svg');

function verificarAncho() {
    if (window.innerWidth <= 1548) {
        icono[7].remove();
        icono[8].remove();
        icono[9].remove();
    }else{
        const div = document.querySelectorAll('DIV');
        div[9].appendChild(icono[7]);
        div[9].appendChild(icono[8]);
        div[9].appendChild(icono[9]);
    }
}

window.addEventListener("resize", verificarAncho);
verificarAncho();
