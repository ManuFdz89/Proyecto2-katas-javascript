// 4.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean mayor que 18
const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const adults = ages1.filter(age => age > 18);
console.log("Mayores de 18: " + adults);

// 4.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean par.
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const parAges = ages2.filter(age => age % 2 === 0);
console.log("Edades pares: " + parAges);


// 4.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers1 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const lolStreamers = streamers1.filter(streamer => streamer.gameMorePlayed === 'League of Legends');
console.log("Streamers de LoL: ");
console.log(lolStreamers);


// 4.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'u' en su propiedad .name.
const streamers2 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamersWithU = streamers2.filter(streamer => streamer.name.includes('u'));
console.log("Streamers con 'u' en su nombre: ");
console.log(streamersWithU);


// 4.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'Legends' en su propiedad .gameMorePlayed. 
// Además, pon el valor de la propiedad a MAYUSCULAS cuando .age sea mayor que 35.
const streamers3 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const legendsStreamers = streamers3.filter(streamer => {
    const playsLegends = streamer.gameMorePlayed.includes('Legends');
    if (playsLegends && streamer.age > 35) {
        streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
    }
    return playsLegends;
});

console.log("Streamers de Lol (mayores de 35 en mayúsculas): ");
console.log(legendsStreamers);
