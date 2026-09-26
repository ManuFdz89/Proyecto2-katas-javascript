// 2.1 Inserta dinámicamente en un HTML un div vacío con JavaScript.

const divVacio = document.createElement('div');
document.body.appendChild(divVacio);

// 2.2 Inserta dinámicamente un div que contenga una 'p'.
const divContenedor = document.createElement('div');
const parrafoInterno = document.createElement('p');
divContenedor.appendChild(parrafoInterno);
document.body.appendChild(divContenedor);

// 2.3 Inserta un div que contenga 6 'p' utilizando un loop.
const divConBucle = document.createElement('div');
for (let i = 0; i < 6; i++) {
    const pBucle = document.createElement('p');
    divConBucle.appendChild(pBucle);
}
document.body.appendChild(divConBucle);

// 2.4 Inserta una 'p' con el texto 'Soy dinámico!'.
const pDinamico = document.createElement('p');
pDinamico.textContent = 'Soy dinámico!';
document.body.appendChild(pDinamico);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const tituloH2 = document.querySelector('h2.fn-insert-here');
tituloH2.textContent = 'Wubba Lubba dub dub';

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const listaUl = document.createElement('ul');
for (let i = 0; i < apps.length; i++) {
    const elementoLi = document.createElement('li');
    elementoLi.textContent = apps[i];
    listaUl.appendChild(elementoLi);
}
document.body.appendChild(listaUl);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const elementosABorrar = document.querySelectorAll('.fn-remove-me');
for (let i = 0; i < elementosABorrar.length; i++) {
    elementosABorrar[i].remove();
}

// 2.8 Inserta una 'p' con el texto 'Voy en medio!' entre los dos primeros div.
const pEnMedio = document.createElement('p');
pEnMedio.textContent = 'Voy en medio!';
const todosLosDivs = document.querySelectorAll('div');
document.body.insertBefore(pEnMedio, todosLosDivs[1]);

// 2.9 Inserta 'p' con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const divsInsertHere = document.querySelectorAll('div.fn-insert-here');
for (let i = 0; i < divsInsertHere.length; i++) {
    const pdentro = document.createElement('p');
    pdentro.textContent = 'Voy dentro!';
    divsInsertHere[i].appendChild(pdentro);
}