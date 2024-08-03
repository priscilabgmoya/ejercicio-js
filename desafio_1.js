function receta(heladera, ingredientes, faltantes){
for (let index = 0; index < ingredientes.length; index++) {
    const element = ingredientes[index];
    if(!heladera.includes(element)){
        faltantes.push(element)
    }
}
return faltantes; 
}

const h =["leche", "huevo", "naranjas", "bananas", "agua", "manteca", "dulce de leche", "escencia de vainilla","huevo","huevo", "leche", "bananas"];
const i = ["leche", "huevo", "huevo", "harina", "manzanas"]; 
let f = []; 

f = receta(h, i, f); 
console.log(f);
