let mes = 13;
let estacion = 'Estacion desconocido';

switch(mes){
    case 1: case 2: case 12:
        numeroTexto='Invierno';
        break;
    case 3: case 4: case 5:
        numeroTexto='Primavera';
        break;
    case 6: case 7: case 8:
        numeroTexto='Verano';
        break;
    case 9: case 10: case 11:
        numeroTexto='Otoño';
        break;
        default:
            numeroTexto='Estacion no encontrada';
}
console.log(numeroTexto);