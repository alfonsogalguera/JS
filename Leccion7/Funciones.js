function miFuncion(a,b){
    console.log(arguments.length);
    return a + b;
}

let resultado = miFuncion(2,3);
console.log(resultado);

//TIPOS DE EXPRESION O ANONIMAS

let x = function (a,b){
    return a + b;
};

resultado = x(1,2);
console.log(resultado);

//Funciones tipo self 

(function(a,b){
    console.log('Ejecutando la funcion: '+ (a+b));
})(3,4);


//funciones como datos

console.log(typeof miFuncion);

var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);
