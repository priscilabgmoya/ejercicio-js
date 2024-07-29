
function chocolates(k,x){
let cajas = 0; 
let cajaBombones = []; 
while(x.length >= k){
    for (let index = 0; index < k; index++) {
        const element = x[index];
        if(element){
            cajaBombones.push(element); 
            x[index]--; 
        }
    }
    if(cajaBombones.length === k){
        cajas++
        x = x.filter(e=>e!==0); 
        cajaBombones = []; 
    }
}
return {cajas}; 
}

const{cajas} = chocolates(3,[2,5,8,7]); 
console.log(cajas); 
