let persona = {
    nombre: 'Alfonso',
    apellido: 'Galguera',
    email: 'galgueraalfonso@gmail.com',
    edad: 22, 
    nombreCompleto: function(){
        return this.nombre + ' ' +this.apellido;
    }
}
console.log(persona.nombreCompleto());

//Creacion de objetos 

let persona2 = new Object();
persona2.nombre = 'Jorge';
persona2.direccion= 'chipilo2000';
persona2.telefono= '9581008481';

console.log(persona2); 