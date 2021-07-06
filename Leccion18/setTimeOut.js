
let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}: ${fecha.getMinutes()} : ${fecha.getSeconds()}` );
}
setInterval(reloj, 1000);
// function miFuncion1(){
//     console.log('Funcion 1');
// }

// function miFuncion2(){
//     console.log('Funcion 2');
// }

// miFuncion2();
// miFuncion1();


// //Funciones de tipo callback

// function imprimir(mensaje){
//     console.log(mensaje);
// }
// function sumar(op1, op2, funcionCallback){
//     let res = op1 + op2;
//     funcionCallback(`Resultado: ${res}`);
// }

// sumar(5,3, imprimir);

// //Llamadas asincronas con uso setTimeOut

// function miFuncionCallBack(){
//     console.log('Saludo asincrono despues de 3 segundos');
// }

// setTimeout(miFuncionCallBack, 3000);//Después de 3 segundos

// setTimeout(function(){console.log('saludo asincrono 2')}, 4000);

// setTimeout( () => console.log('saludo asincrono 3'), 5000);
