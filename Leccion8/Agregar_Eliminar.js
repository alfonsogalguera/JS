let persona = {
    nombre: 'Alfonso',
    apellido: 'Galguera',
    telefono: '2228132345',
    direccion: 'Lazaro cardenaz'
}

persona.correo = 'galgueraalfonso@gmail.com';
delete persona.telefono;
console.log(persona);

//Contatenar cada valor de cada propiedad 
console.log(persona.nombre + ', ' + persona.apellido  );
let personaArray = Object.values(persona);
console.log(personaArray);

let personaString = JSON.stringify(persona);
console.log(personaString);
