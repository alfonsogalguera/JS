let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    correo: 'galguera@gmail.com',
    edad: 22,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre +' ' + this.apellido;
    }
}

//Get 
console.log(persona.lang);

persona.lang = 'us';

console.log(persona.lang);
//Set