//Funcion constructor de bjetos de tipo persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let padre = new Persona('Juan', 'Perez', 'jp@gmail.com');
console.log(padre);

let madre = new Persona('Elsa', 'Caballero', 'EC@gmail.com');
console.log(madre.nombreCompleto());
//console.log(madre);

padre.nombre = 'Carlos';
console.log(padre.nombreCompleto());
//console.log(padre);

//Metodos en metodos 
var miObjeto = new Object();
let miObjeto2 = {};