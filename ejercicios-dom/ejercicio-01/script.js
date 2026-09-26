// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const botonShowMe = document.querySelector('.showme');
console.log("Botón:", botonShowMe);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const h1Pillado = document.querySelector('#pillado');
console.log("H1 Pillado:", h1Pillado);

// 1.3 Usa querySelector para mostrar por consola todos los p
const todosLosParrafos = document.querySelectorAll('p');
console.log("Párrafos:", todosLosParrafos);

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase .pokemon
const elementosPokemon = document.querySelectorAll('.pokemon');
console.log("Pokémons:", elementosPokemon);

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
const elementosTestMe = document.querySelectorAll('[data-function="testMe"]');
console.log("Atributos testMe:", elementosTestMe);

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".
console.log("Tercer personaje:", elementosTestMe[2]);