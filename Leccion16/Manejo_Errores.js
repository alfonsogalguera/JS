let resultado = 'hola';

try{
    if(isNaN(resultado)) throw 'No es un numero';
}
catch(error){
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}