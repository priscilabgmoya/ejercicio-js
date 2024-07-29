function cadena (a){
    let divisores = []; 
    let grande = []; 
    for (let index = 0; index < a*a; index++) {
        if(a % index  === 0 && a !== index){
            divisores.push(index); 
        }
    }
    return{divisores}; 
}

const {divisores } = cadena(500); 
console.log(divisores);

