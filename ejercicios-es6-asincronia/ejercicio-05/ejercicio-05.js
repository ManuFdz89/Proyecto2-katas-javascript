//Dado el siguiente javascript, utiliza .filter() para mostrar por consola los streamers que incluyan la palabra introducida en el input. De esta forma, si introduzco 'Ru' me  eberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const inputBuscador = document.querySelector('[data-function="toFilterStreamers"]');
inputBuscador.addEventListener('input', (evento) => {
    const textoBuscado = evento.target.value.toLowerCase();
    const streamersFiltrados = streamers.filter(streamer => {
        return streamer.name.toLowerCase().includes(textoBuscado);
    });
    console.log("Buscando: '" + evento.target.value + "'");
    console.log(streamersFiltrados);
});