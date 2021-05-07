//Tipo de dato string
var nombre = "Alfonso";
console.log(nombre);

nombre=10;
console.log(nombre);
//Tipo de dato numerico
var numero=1000;
console.log(numero);

//Tipo de dato objeto

var objeto={
    nombre : "Juan", 
    apellido : "perez",
    telefono : "9581008481"
}
console.log(objeto);

//Tipo de dato boolean
var bandera = true;
console.log(bandera);

//Tipo de dato function

function mifuncion(){}
console.log(mifuncion);

//tipo de dato symbol

var simbolo= Symbol();
console.log(simbolo);

//tipo clase es una funcion
class Persona{
    constructor(nombre, apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }
}
console.log(Persona);

//tipo de dato undefined
var x;
console.log(x);


//null
var y=null;
console.log(y);

//arreglos
var arreglo =['numero', 1, 2, 'hola', 'hello'];
console.log(arreglo);

//Valores vacios
var z = '';
console.log(z);