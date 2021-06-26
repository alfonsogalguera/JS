class Persona {

    static contadorPersona = 0;

    static get MAX_OBJ(){
        return 5;
    }

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if(Persona.contadorPersona < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersona; 
        }
        else{
            console.log('Se han superado el maximo de admitidos');
        }
        
    }
    get nombre(){
    return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido; 
    }
    toString(){
        return this.nombreCompleto();
    }
    static saludar(){
        console.log('Saludos desde este metodo estatico');
    }

    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido);
    }
}


class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    //sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ' ' + this._departamento;
    }
}

let persona1 =  new Persona('Juan', 'Perez');
console.log(persona1.toString());

let empleado1 = new Empleado('Alfonso', 'Galguera', 'administrativo');

console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ = 10;
console.log(Persona.MAX_OBJ);

let persona2= new Persona('alfonso', 'Galguera');

let persona3= new Persona('alfonso', 'Galguera');

let persona4= new Persona('alfonso', 'Galguera');

let persona5= new Persona('alfonso', 'Galguera');

console.log(persona4.toString());