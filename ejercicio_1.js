/*
 * Crea un programa que sea capaz de transformar texto natural a código
 * morse y viceversa.
 * - Debe detectar automáticamente de qué tipo se trata y realizar
 *   la conversión.
 * - En morse se soporta raya "—", punto ".", un espacio " " entre letras
 *   o símbolos y dos espacios entre palabras "  ".
 * - El alfabeto morse soportado será el mostrado en
 *   https://es.wikipedia.org/wiki/Código_morse.
 */

import { morse } from "./helpers/morse.js";

class MorseCode{
    #morse;  
    constructor(){
        this.#morse = morse; 
    }
    #createArray(text){
        let keyArray= [];
        const arrayText = text.split(" ");
        for (let index = 0; index < arrayText.length; index++) {
            const element = arrayText[index].toLocaleUpperCase();
            if(element !== ""){
                const aaryKeys = [...element];
                const key ={
                    key:element,
                    array: [...aaryKeys]
                }
                keyArray.push(key); 
            }
        } 
        return keyArray; 
    }
    #createCode(array){
        let morse = ""; 
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if(element.key.includes("CH")){
                let newArray = []
                for (let i = 0; i < element.array.length; i++) {
                    const e = element.array[i];
                    let p = i+1; 
                    if(e.includes("C") &&  element.array[p]?.includes("H")){
                      newArray.push(e+element.array[p])
                      i++; 
                    }else{
                        newArray.push(e); 
                    }
                }
                element.array= [...newArray]; 
            }
                for (let index = 0; index < element.array.length; index++) {
                    const key = element.array[index];
                    morse += this.#morse[key]; 
                }
                morse += ""; 
          
        }
        console.log("morse con espacio" , morse);

    }
    createCode(text){
        const arrayText = this.#createArray(text); 
        this.#createCode(arrayText); 
    //console.log(arrayText);
        //console.log(this.#morse);
    }
}

const prueba = new MorseCode(); 
prueba.createCode("Esto es una prueba ñeri"); 
prueba.createCode("Esto"); 
prueba.createCode("Esto es  una prueba"); 
prueba.createCode(" ch chacho"); 
prueba.createCode("123456789 ?"); 