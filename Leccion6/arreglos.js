//let alitas = new Array();

const precio = ['80', '100', '150', '200','300'];
for(let i = 0; i<precio.length; i++){
    console.log(i+": "+precio[i]);
}
precio[2]=120;
console.log(precio);

precio.push('110');
console.log(precio);

precio[precio.length]='222';
console.log(precio);

precio[7]='666';
console.log(precio);

//Preguntar si es un array

console.log(typeof precio);

Array.isArray(precio);
console.log(Array.isArray(precio));

console.log(precio instanceof Array);
