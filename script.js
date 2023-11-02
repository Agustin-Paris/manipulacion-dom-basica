const h1 = document.querySelector('h1');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log({
    h1,
    pid,
    parrafito,
    input,
});

// ejemplos para cada elemeto de Html

// Cambio o agregar texto a un elemento
h1.innerText = "Cambio de titulo <br> Cambio con BR" // INTERPRETA COMO TEXTO
h1.innerHTML = "Cambio de titulo <br> Cambio con BR" // INTERPRETA COMO CODGIO

// Modifical atrivutos de Elementos en Html

h1.value = "456" // crear atributo o cambiar/
h1.getAttribute('class'); // leer atributos de nuestros elementos
h1.setAttribute('class','parrafo'); // modificar atributo. ('clase','nuevo valor')
h1.classList('parrafio'); // Agregar clase.
h1.remove('parrafo'); //Eliminar clase.



// crear un elemento de html desd JS.
const img = document.createElement('img');
img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png');
console.log(img);

// borrar contenido
pid.innerHTML = "";
// append es para agregar. en este caso lo agregamos al id
pid.append(img);