//Funcion constructor de bjetos de tipo persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

Persona.prototype.tel = 2228132345;

let padre = new Persona('Juan', 'Perez', 'jp@gmail.com');
padre.tel= 235648791;
console.log(padre.tel);

let madre = new Persona('Elsa', 'Caballero', 'EC@gmail.com');
madre.tel=23456849510;
console.log(madre.tel);
//console.log(madre);

