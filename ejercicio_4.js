/*
 * Crea un programa que determine si dos vectores son ortogonales.
 * - Los dos array deben tener la misma longitud.
 * - Cada vector se podría representar como un array. Ejemplo: [1, -2]
 */

function isOrthogonal(vector_1, vector_2 ){
    debugger
    if(vector_1.length !== vector_2.length) throw new Error("You have to enter an array of the same length"); 
    let suma = 0; 
    vector_1.map((e,i) =>{suma =+ e * vector_2[i]}); 
    console.log(suma=== 0);

}

isOrthogonal([1,2], [2,1]); 