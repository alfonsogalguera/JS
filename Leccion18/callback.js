function miFuncion1(){
    console.log('Funcion 1');
}

function miFuncion2(){
    console.log('Funcion 2');
}

miFuncion2();
miFuncion1();


//Funciones de tipo callback

function imprimir(mensaje){
    console.log(mensaje);
}
function sumar(op1, op2, funcionCallback){
    let res = op1 + op2;
    funcionCallback(`Resultado: ${res}`);
}

sumar(5,3, imprimir)