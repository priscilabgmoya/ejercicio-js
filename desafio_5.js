const data ={
    banana: {
        carbohidratos: 27,
        calorias: 105
    },
    atun:{
        proteinas: 30,
        calorias:120
    },
    aceite:{
        grasas:1,
        calorias:9
    }
}
function zetadieta(c,p,g){
    debugger
    if(c < data["banana"].carbohidratos) return "Se necesita al menos el consumo de una banana"; 
    if(p < data["atun"].proteinas)return "Se necesita al menos el consumo de una lata de atún"; 
    if(g < 0  ) return "Es necesario al menos 1 gramo de Aceite de oliva"; 
    let cantidadBanana = Math.round(c/data["banana"].carbohidratos );
    let cantidadAtun = Math.round(p/data["atun"].proteinas );
    let cantidadAceite = Math.round(g/data["aceite"].grasas );

    let calorias = cantidadAceite * data["aceite"].calorias + cantidadAtun * data["atun"].calorias + cantidadBanana * data["banana"].calorias ; 
    return {calorias}
}

const {calorias} = zetadieta(100,90, 79); 
console.log(calorias);