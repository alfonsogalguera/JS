let miFuncion = function() {
    console.log('Saludos desde mi funcion');
}


// let miFuncionFlecha = () => {
//     console.log('Saludos desde mi funcion flecha.');
// }


// const saludar = () => {
//     return 'Saludos desde mi funcion flecha';
// }
const saludar = () => 'Saludos desde funcion flecha';
console.log(saludar());
const regresaObjeto = () => ({nombre: 'Juan'});
console.log(regresaObjeto());

const funcionConParametros = (mensaje)=> console.log(mensaje);
funcionConParametros('Saludos con parametros');

