 const h1 = document.querySelector('h1');
 const input1 = document.querySelector('#calculo1');
 const input2 = document.querySelector('#calculo2');
 const btn = document.querySelector('#btnCalculo');
 const resultado = document.querySelector('#resultado');
 const form = document.querySelector('#form');


//    .addEventListener
// se remplaza el (onclick="btnOnclick()") de html .
// btn.addEventListener('click',btnOnclick);

// para formulario
form.addEventListener('submit',btnOnclick);

 function btnOnclick(event) {
    // para que no se salga de la pagina y muestre el resultado
    event.preventDefault();

    // el .value trae lo que el usuaio pone y lo suma.
    console.log (input1.value + input2.value);
    // cada input lo creo a number
    num1 = Number(input1.value);
    num2 = Number(input2.value);
    suma = num1 + num2;

    resultado.innerText = "la suma da  " + suma;
 }
 