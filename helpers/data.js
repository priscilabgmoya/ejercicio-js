import { validateNumber, validateText } from "./validation.js";

export const getData=() =>{
    debugger
    let comandos = []; 
    const pharse = prompt("Ingrese una frase:"); 
    const response = validateText(pharse); 
    if (response) return alert(response); 
    const length = prompt("Ingrese cantidad de comandos:");
    const responseNumber = validateNumber(length); 
    if(responseNumber) return alert(responseNumber); 
    let l = parseInt(length); 
    for (let index = 0; index < l; index++) {
        const pharse = prompt("Ingrese un comando:"); 
        const response = validateText(pharse); 
        if (response) {
            index--;
             alert(response);
        }else{
            comandos.push(pharse); 
        }
    }
  return {texto: pharse, comandos}
}