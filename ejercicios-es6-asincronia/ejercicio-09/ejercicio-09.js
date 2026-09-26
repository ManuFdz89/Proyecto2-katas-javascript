// Ejercicio 9: Ahora realizaremos una petición a la PokeAPI, queremos mostrar al entrar en la página la imagen de un Pokemon, la magia estará en que cada vez que recargues la página, será un nuevo Pokemon dentro de la primera generación de Pokemon, es decir, del 1 al 151.

const pokemonImage = document.querySelector('.random-image');

const url = "https://pokeapi.co/api/v2/pokemon/" + Math.ceil(Math.random()*151);

console.log(url)


fetch(url)
    .then(response => response.json())
    .then(datosPokemon =>{
        const image = datosPokemon.sprites.other.showdown.front_shiny;
        pokemonImage.src = image;

        
        pokemonImage.style.width = "150px";
    } )
    .catch(error =>{
        console.log("Error al buscar el pokemon");
    })