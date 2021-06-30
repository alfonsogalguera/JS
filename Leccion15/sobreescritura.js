class Empleado{
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }
    obtenerDetalles(){
        return `Empleado: Nombre: ${this.nombre}, sueldo: ${this.sueldo}`;
    }
}
class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this._departamento = departamento;
    }
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} departamento: ${this.departamento}`;
    }

    
}

function imprimir(tipo) {
    console.log(tipo.obtenerDetalles());
    if(tipo instanceof Gerente){
        console.log('objeto de tipo gerente');
    }
}
let empleado1= new Empleado('Juan', 30000);
let gerente1 = new Gerente('carlos', 500 ,'sistemas');

imprimir(gerente1);