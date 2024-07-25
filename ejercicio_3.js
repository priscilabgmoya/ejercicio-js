/*
 * Crea un programa se encargue de transformar un número
 * decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 */

function convertToBinary(number){
    let binary = ""; 
    if(!number) return binary+="0"; 
    while(number!=0){
        let reminder = number % 2; 
        binary += reminder; 
        number = Math.floor(number / 2);
    }
    return {binary}; 
}

convertToBinary(10)