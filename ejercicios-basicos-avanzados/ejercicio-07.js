/*Ejercicio 7
Completa esta función para que, al recibir dos números por argumento, te devuelva por consola el más alto de los dos.

function greaterNumber(numberOne , numberTwo) {
  // Completar código
}*/

function greaterNumber(numberOne , numberTwo) {
    if(numberOne>numberTwo){
        return numberOne;
    }else{
        return numberTwo;
    }
}

console.log(greaterNumber(15,10));