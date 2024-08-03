function thor(a, f, p, D) {
    let d = [];
    for (let index = 0; index < p.length; index++) {
        const peso = p[index];
        const altura = a[index];
        const fuerza = f[index];
        if (altura && fuerza) {
            const distancia = altura * fuerza / peso;
            if (distancia > D) {
                d.push(distancia);
            }
        }
    }
return d.length;
}

const altura = [123, 189, 178, 165, 134];
const fuerza = [34, 56, 70, 80, 90];
const peso = [180, 90, 95, 65, 70];

const cantidad = thor(altura,fuerza,peso, 30); 
console.log(cantidad);

