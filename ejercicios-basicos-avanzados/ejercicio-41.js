/*
Ejercicio 41
Crea una función llamada rollDice() que reciba como parámetro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función.
Que la función use el parametro para simular una tirada de dado y retornar el resultado usando Math.random().
*/
function rollDice(faces) {
    return Math.floor(Math.random() * faces) + 1;
}

console.log("Dado de 6 caras:", rollDice(6));
console.log("Dado de 20 caras:", rollDice(20));