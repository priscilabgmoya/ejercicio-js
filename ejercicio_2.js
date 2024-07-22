/*
 * Escribe una función que calcule si un número dado es un número de Armstrong
 * (o también llamado narcisista).
 * Si no conoces qué es un número de Armstrong, debes buscar información
 * al respecto.
 */

function isArmstrong(number){
    debugger
    let length = (""+number).length; 
    const array = [...(""+number)]; 
    let sum =0 ; 
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        sum += Math.pow(element,length); 
    }
    if(sum == number){
        return "Is an Armstrong"
    }else{
        return "Isn't an Armstrong"
    }
}
console.log(isArmstrong(153)); 