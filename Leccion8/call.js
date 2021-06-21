let persona1= {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo, tel){
       return titulo + ': ' + this.nombre + ' ' + this.apellido + ' ' + tel; 
    }
}

let persona2 = {
    nombre: 'Carla',
    apellido: 'Lara'
}

//Uso de call para acceder a la funcion de persona 1
console.log(persona1.nombreCompleto('ing', '222813235'));


console.log(persona1.nombreCompleto.call(persona2, 'Ing', '2228132345'));

//Metodo apply


console.log(persona1.nombreCompleto('Medico', '123456789'));
let arreglo= ['Ing', '12345689'];
console.log(persona1.nombreCompleto.apply(persona2, arreglo));
