let condicion=false;
if(condicion){
    console.log("Condicion verdadera.");
}
else{
    console.log("Condicion falsa");
}


let numero =5;
if(numero==1){
    console.log("Numero 1");
}else if(numero==2){
    console.log("numero 2");
}else if(numero==3){
    console.log("Numero 3");
}else if(numero==4){
    console.log("Numero 4");
}else{
    console.log("Numero desconocido");
}

let mes = 4
let estacion;
if(mes == 1 || mes==2 || mes==12 ){
    estacion="Invierno";
}else if(mes ==3 || mes ==4 || mes==5){
    estacion="Primavera";
}else if(mes== 6|| mes==7 || mes==8){
    estacion="Verano";
}else if(mes==9|| mes==10||mes==11){
    estacion="Otoño";
}else{
    estacion="valir incorrecto";
}
console.log(estacion);

//Ejercicio 3
let hora=25;
let saludo;
if(hora>=6 && hora <=11){
    saludo="Buenos dias";
}else if(hora>=12 && hora <= 18){
    saludo="Buenas tardes";
}else if(hora>=19 && hora<=24){
    saludo="Buenas noches";
}else if(hora>=0 && hora<6){
    saludo="Durmiendo";
}else{
    saludo="No hay esa hora";
}
console.log(saludo);