//tipos primitivos
let x = 10;


function cambiarValor(a){
    a = 20;
    return;
}

cambiarValor(x);
console.log(x);
//console.log(a);


//PASO POR REFERENCIA

const persona = {
    nombre: 'Alfonso', 
    apellido: 'Galguera'
}

function cambiarValorObjeto (p1){
    p1.nombre = 'Poncho';
    p1.apellido = 'Caballero';
}

cambiarValorObjeto(persona);
console.log(persona);