let a = 1;

//operador compuesto
a+=1;
console.log(a);

a -=2;
console.log(a);

//OPERADORES DE COMPARACIÓN
let b=5, c=2;
let z=b!=c;
console.log(z);

//EJERCICIOS

let h=5;
if(h % 2 == 0 ){
    console.log("la variable es par");
}else{
    console.log("La variable no es par");
}

//EJERCICIO QUIEN ES MAYOR
let edad = 26, adulto=18;
if(edad>=adulto){
    console.log("La persona es mayor de edad.");
}else{
    console.log("La persona es menor de edad.");
}
//AND
let niño1=18, niño2=19, mayor=18;
if(niño1>=mayor && niño2>=mayor){
    console.log("Los dos niños pueden entrar a la fiesta.")
}else{
    console.log("Uno de los niños no puede entrar");
}

//OR
let vacaciones = true, diaDescanso=false;
if(vacaciones || diaDescanso){
    console.log("El padre puede asistir al juego.");
}else{
    console.log("El padre esta ocupado");
}


//Operador ternario

let resultado =(3>4) ? "verdadero" : "falso";
console.log(resultado);

let numero=10;
resultado = (numero % 2 == 0) ? "Es par" : "Es impar";
console.log(resultado);