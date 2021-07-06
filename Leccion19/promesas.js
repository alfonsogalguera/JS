let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if(expresion){
        resolver('Resolvió correcto');
    }else{
        rechazar('Se produjo un error');
    }
});

let promesa = new Promise((resolver) => {
    //console.log('Inicio de promesa');
    setTimeout(() => resolver('Saludos con promesa y timeOut'), 3000);
    //console.log('fin de promesa');
});

//promesa.then(valor => console.log(valor));

// miPromesa.then(
//     valor => console.log(valor),
//     error => console.log(error)
// );

async function miFuncionConPromesa(){
    return 'saludos con promesa y async';
}
miFuncionConPromesa().then(valor => console.log(valor));
