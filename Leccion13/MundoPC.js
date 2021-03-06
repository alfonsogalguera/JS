class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada= tipoEntrada;
        this._marca = marca;
    }

    get TipoEntrada(){
        return this._tipoEntrada;
    }
    set TipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    get Marca(){
        return this._marca;
    }
    set Marca(marca){
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton(){
        this._idRaton;
    }
    toString(){
        return `Raton: [idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

class Teclado extends DispositivoEntrada{
    static contadorTeclado = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclado;
    }
    get idTeclado(){
        this._idTeclado;
    }
    toString(){
        return `Raton: {idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}}`;
    }
}

class Monitor{
    static contadorMonitores = 0;
    constructor(marca, tamaño){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }
    get IdiMonitor(){
        return this._idMonitor;
    }
    toString(){
        return `Monitor: [idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamaño}`;
    }
}
class Computadora{
    static contadorComputadoras = 0;
    constructor(nombre, monitor, raton, teclado){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;
    }
    toString(){
        return `Computadora ${this._idComputadora}: ${this._nombre} \n ${this._monitor}\n ${this._raton} \n ${this._teclado}`;
    }
}

class Orden{
    static contadorOrdenes = 0;

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarComputadoras(computadora){
        this._computadoras.push(computadora);
    }
    mostrarOrden(){
        let computadorasOrden = ' ';
        for(let computadora of this._computadoras){
            computadorasOrden += `\n${computadora}`;
        }
        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
    }
}

let raton1 = new Raton('USB', 'HP');
let raton2 = new Raton('USB', 'Acer');
let teclado1 = new Teclado('Bluetooth', 'Lenovo');
let teclado2 = new Teclado('Alambrico', 'logitec');
let monitor1 = new Monitor('HP', 15);
let monitor2 = new Monitor('DELL', 28);
console.log(monitor1.toString());

let computadora1 = new Computadora('HP', monitor1, raton1, teclado1);
console.log(computadora1.toString());
let computadora2 = new Computadora('Gamer', monitor2, raton2, teclado2);
console.log(computadora2.toString());

let Orden1 = new Orden();
Orden1.agregarComputadoras(computadora1);
Orden1.agregarComputadoras(computadora2);
Orden1.mostrarOrden();