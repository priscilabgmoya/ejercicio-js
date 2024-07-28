import { getData } from './helpers/data.js';
import { newFunction } from './helpers/function.js';
import { validateLength, validateParams } from './helpers/validation.js';

export const procesarTexto = (texto, comandos) => {
 alert( validateParams(texto, comandos))
  let newPhrase = '';
  for (let index = 0; index < comandos.length; index++) {
    const element = comandos[index].toUpperCase();
    // newFunction[element] es una propiedad de los objetos de funciones
    if(newFunction[element]){
      const response =  newFunction[element](texto);
      newPhrase+= response;
    }else{
      alert(`${element} es una función no definida en el sistema!`);
    }
  }
  alert(validateLength(texto))
  return alert(`Su frase es ${newPhrase}`);
};

const {texto, comandos} = getData(); 
procesarTexto(texto, comandos); 