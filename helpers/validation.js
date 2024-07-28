export const validateParams =(texto, comandos)=>{
    if (texto == '') return 'Se tiene que Ingresar un texto.';
    if (comandos?.length === 0) return 'Ingrese una opción dentro de los comandos. ';
    if(texto.match(/[a-zA-Z]/)) return 'Ingrese solamente palabras. No se aceptan ni numeros y/o caracteres especiales';
    if(!Array.isArray(comandos)) return 'Ingrese un array de comandos';
    if(!(comandos instanceof Array) ) return 'Ingrese un array de comandos';
    return null;
};

export const validateText = (text)=>{
    if (text == '') return 'Se tiene que Ingresar un texto.';
    if(!text.match(/[a-zA-Z]/)) return 'Ingrese solamente palabras. No se aceptan ni numeros y/o caracteres especiales';
    return null; 
}
export const validateNumber = (number)=>{
    if (number == '') return 'Se tiene que Ingresar un numero.';
    if(!parseInt(number)) return 'Ingrese solamente numeros. No se aceptan ni palabras y/o caracteres especiales';
    return null; 
}

export const validateLength = (text) =>{
    if(text.length >1000) return 'La frase no puede superar los 1000 caracteres!'; 
}