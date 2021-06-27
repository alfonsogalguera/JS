class Persona {
    static contadorPersonas = 0;

    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.idPersona = ++Persona.contadorPersonas;
    }

    get IdPersona (){
        return this.idPersona;
    }

    get Nombre(){
        return this.nombre;
    }
    set Nombre(nombre){
        this.nombre = nombre;
    }
    get Apellido(){
        return this.apellido;
    }
    set Apellido(apellido){
        this.apellido = apellido;
    }
    get Edad(){
        return this.edad;
    }
    set Edad(edad){
        this.edad = edad;
    }
    toString(){
        return this.idPersona + ' ' +this.nombre + ' '  + this.apellido + ' ' + this.edad;
    } 
}

class Empleado extends Persona{
    static contadorEmpleados = 0;
    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this.sueldo = sueldo;
        this._idEmpleado = ++Empleado.contadorEmpleados;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }
    get Sueldo(){
        return this.sueldo;
    }
    set Sueldo(sueldo){
        this.sueldo=sueldo;
    }
    toString(){
        return super.toString() + ' ' + this._idEmpleado + ' ' + this.sueldo;
    }
}

class Cliente extends Persona{
    static contadorCliente = 0;

    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        this.idCliente = ++Cliente.contadorCliente;
        this.fechaRegistro = fechaRegistro;
    }

    get idCliente(){
        return this.idCliente;
    }
    get fechaRegistro(){
        return this.fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        this.fechaRegistro=fechaRegistro;
    }
    toString(){
        return super.toString() + ' ' + this.idCliente + ' ' + this.fechaRegistro;
    }
}
//Pruebas 
let persona1 = new Persona('Juan', 'Perez', '22');
console.log(persona1.toString());
let persona2 = new Persona('Carlos', 'Ramirez', '25');
console.log(persona2.toString());

let empleado1= new Empleado('karla', 'Moreno', '35', 25000);
console.log(empleado1.toString());