let numero ="17";

let edad = Number(numero);
console.log(edad);

if(isNaN(edad)){
    console.log("No es un numero.");
}
else{
    if(edad>=18){
        console.log("Puede votar.");
    }else{
        console.log("Muy joven para votar.");
    }
    
}