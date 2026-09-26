// Ejercicio 8: Accederemos a los datos de una API pública de Game Of Thrones, queremos un select con todos los nombres de los personajes para que cuando un usuario seleccione un nombre salga su imagen en el medio de la página

const characterList = document.querySelector('#character-list');
const characterImage = document.querySelector('.character-image');

fetch('https://thronesapi.com/api/v2/Characters')
    .then(response => response.json())
    .then(characters => {
        characters.forEach(character => {
            const option = document.createElement('option');
            option.textContent = character.fullName; 
            option.value = character.imageUrl; 
            characterList.appendChild(option);
        });
    })
    .catch(error => {
        console.error("Hubo un error al obtener los personajes:", error);
    });
characterList.addEventListener('change', (evento) => {
    const urlImagenSeleccionada = evento.target.value;
    characterImage.src = urlImagenSeleccionada;
});